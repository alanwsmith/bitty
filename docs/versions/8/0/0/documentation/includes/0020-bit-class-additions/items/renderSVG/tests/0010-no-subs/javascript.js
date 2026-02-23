#key = "svg_signal_57C32";

test_signal_57C32(_, el) {
  const svg = this.renderSVG(this.#key);
  // el.innerHTML = svg.querySelector("text").innerHTML;
  // this.send(svg, "view_signal_57C32");
 }

view_signal_57C32(svg, el) {
  el.replaceWith(svg);
}


bittyReady() {
  const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>
</svg>`;
  this.setLogLevel("none");
  this.createSVG(this.#key, input);
  this.trigger("test_signal_57C32");
}
