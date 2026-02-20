window.Class4375F = class {
  #key = "svg_signal_4375F";

  test_signal_4375F(_, el) {
    const subs = {
      "TARGET_4375F": "ok",
    };
    const svg = this.renderSVG(this.#key, subs);
    el.innerHTML = svg.querySelector("text").innerHTML;
    this.send(svg, "view_signal_4375F");
  }

  view_signal_4375F(svg, el) {
    el.replaceWith(svg);
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="30" y="24" font-size="20" text-anchor="middle" fill="white">TARGET_4375F</text>
</svg>`;
    this.setLogLevel("none");
    this.createSVG(this.#key, input);
    this.trigger("test_signal_4375F");
  }
};
