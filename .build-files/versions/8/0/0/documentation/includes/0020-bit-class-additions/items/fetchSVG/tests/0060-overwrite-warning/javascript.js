window.ClassB1D68 = class {
  #key = "svg_signal_B1D68";

  async test_signal_B1D68(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-svg.svg";
    const result = await this.fetchSVG(this.#key, url);
    if (result.level === "warn" && result.ok === true) {
      el.innerHTML = "ok";
    }
    this.trigger("view_signal_B1D68");
  }

  view_signal_B1D68(svg, el) {
    el.replaceWith(this.renderSVG(this.#key));
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>
</svg>`;
    this.setLogLevel("none");
    this.createSVG(this.#key, input);
    this.trigger("test_signal_B1D68");
  }
};
