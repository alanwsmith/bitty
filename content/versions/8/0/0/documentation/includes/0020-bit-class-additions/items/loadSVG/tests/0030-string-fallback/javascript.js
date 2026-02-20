window.Class655D9 = class {
  #key = "svg_signal_655D9";

  test_signal_655D9(fallback, el) {
    this.loadSVG(this.#key, fallback);
    const svg = this.renderSVG(this.#key);
    el.innerHTML = svg.querySelector("text").innerHTML;
    this.send(svg, "view_signal_655D9");
  }

  view_signal_655D9(svg, el) {
    el.replaceWith(svg);
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_655D9");
  }

  given_signal_655D9(_, __) {
    const fallback = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>
</svg>`;
    this.setLogLevel("none");
    this.deleteSVG(this.#key);
    this.send(fallback, "test_signal_655D9");
  }
};
