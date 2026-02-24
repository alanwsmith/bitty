#key = "svg_$SIGNAL_NAME";

$SIGNAL_NAME(update, el) {
  const result = this.updateSVG(this.#key, update);
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "ok";
  }
  this.trigger("view_$SIGNAL_NAME");
}

view_$SIGNAL_NAME(svg, el) {
  el.replaceWith(this.renderSVG(this.#key));
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteSVG(this.#key);
  const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">bug</text>
</svg>`;
  this.createSVG(this.#key, input);
  const update = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>
</svg>`;
  this.send(update, "$SIGNAL_NAME");
}
