window.ClassCEDB1 = class {
  #key = "svg_signal_CEDB1";

  test_signal_CEDB1(fallback, el) {
    this.loadSVG(this.#key, fallback);
    const svg = this.renderSVG(this.#key);
    el.innerHTML = svg.querySelector("text").innerHTML;
    this.send(svg, "view_signal_CEDB1");
  }

  view_signal_CEDB1(svg, el) {
    el.replaceWith(svg);
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_CEDB1");
  }

  given_signal_CEDB1(_, __) {
    const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>
</svg>`;
    const template = document.createElement("template");
    template.innerHTML = input;
    const fallback = template.content.querySelector("svg");
    this.setLogLevel("none");
    this.removeSVG(this.#key);
    this.send(fallback, "test_signal_CEDB1");
  }
};
