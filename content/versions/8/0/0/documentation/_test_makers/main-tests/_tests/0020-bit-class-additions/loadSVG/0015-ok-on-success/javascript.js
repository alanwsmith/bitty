#key = "svg_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const result = this.loadSVG("el_$HASH");
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "test passed";
  }
  this.trigger("view_$SIGNAL_NAME");
}

view_$SIGNAL_NAME(svg, el) {
  el.replaceWith(this.renderSVG("el_$HASH"));
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>
</svg>`;
  this.setLocalLogLevel("none");
  this.deleteSVG("el_$HASH");
  this.createSVG("el_$HASH", input);
  delete this._svg["el_$HASH"];
  this.trigger("$SIGNAL_NAME");
}
