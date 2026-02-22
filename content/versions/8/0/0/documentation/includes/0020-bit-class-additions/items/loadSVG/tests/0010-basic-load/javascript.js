#key = "svg_signal_2D8D5";

test_signal_2D8D5(_, el) {
  this.loadSVG(this.#key);
  const svg = this.renderSVG(this.#key);
  el.innerHTML = svg.querySelector("text").innerHTML;
  this.send(svg, "view_signal_2D8D5");
}

view_signal_2D8D5(svg, el) {
  el.replaceWith(svg);
}


bittyReady() {
  this.trigger("given_signal_2D8D5");
}

given_signal_2D8D5(_, __) {
  const input = `
vg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>
svg>`;
  this.setLogLevel("none");
  this.createSVG(this.#key, input);
  delete this._svg[this.#key];
  this.trigger("test_signal_2D8D5");
}