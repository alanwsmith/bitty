window.Class2AB87 = class {
  #key = "svg_signal_2AB87";

  test_signal_2AB87(_, el) {
    const result = this.loadSVG(this.#key);
    if (result.ok === true && result.level === "warn") {
      el.innerHTML = "ok";
    }
    this.trigger("view_signal_2AB87");
  }

  view_signal_2AB87(svg, el) {
    el.replaceWith(this.renderSVG(this.#key));
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_2AB87");
  }

  given_signal_2AB87(_, __) {
    const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>
</svg>`;
    this.setLogLevel("none");
    this.createSVG(this.#key, input);
    this.trigger("test_signal_2AB87");
  }
};
