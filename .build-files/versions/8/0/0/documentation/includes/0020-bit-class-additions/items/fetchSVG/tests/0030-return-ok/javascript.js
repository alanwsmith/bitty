window.ClassA9C93 = class {
  #key = "svg_signal_A9C93";

  async test_signal_A9C93(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-svg.svg";
    const result = await this.fetchSVG(this.#key, url);
    if (result.ok === true) {
      el.innerHTML = "ok";
    }
    this.trigger("view_signal_A9C93");
  }

  view_signal_A9C93(svg, el) {
    el.replaceWith(this.renderSVG(this.#key));
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_A9C93");
  }
};
