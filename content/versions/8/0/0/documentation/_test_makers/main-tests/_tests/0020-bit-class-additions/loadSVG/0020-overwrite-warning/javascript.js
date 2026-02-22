#key = "svg_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const result = this.loadSVG(this.#key);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
  this.trigger("view_$SIGNAL_NAME");
}

view_$SIGNAL_NAME(svg, el) {
  el.replaceWith(this.renderSVG(this.#key));
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  const input = `
vg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>
svg>`;
  this.setLogLevel("none");
  this.createSVG(this.#key, input);
  this.trigger("test_$SIGNAL_NAME");
}