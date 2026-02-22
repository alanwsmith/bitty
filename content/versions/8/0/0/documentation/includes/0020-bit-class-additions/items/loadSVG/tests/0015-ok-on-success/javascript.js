#key = "svg_signal_8F8DD";

test_signal_8F8DD(_, el) {
  const result = this.loadSVG(this.#key);
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "ok";
  }
  this.trigger("view_signal_8F8DD");
}

view_signal_8F8DD(svg, el) {
  el.replaceWith(this.renderSVG(this.#key));
}


bittyReady() {
  this.trigger("given_signal_8F8DD");
}

given_signal_8F8DD(_, __) {
  const input = `
vg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>
svg>`;
  this.setLogLevel("none");
  this.deleteSVG(this.#key);
  this.createSVG(this.#key, input);
  delete this._svg[this.#key];
  this.trigger("test_signal_8F8DD");
}