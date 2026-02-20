window.ClassDC5B2 = class {
  #key = "svg_signal_DC5B2";

  test_signal_DC5B2(subs, el) {
    const svg = this.renderSVG(this.#key, subs);
    el.innerHTML = svg.querySelector("text").textContent;
    this.send(svg, "view_signal_DC5B2");
  }

  view_signal_DC5B2(svg, el) {
    el.replaceWith(svg);
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  TARGET_DC5B2
</svg>`;
    const template = document.createElement("template");
    template.innerHTML =
      `<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>`;
    const subs = {
      "TARGET_DC5B2": template.content,
    };
    this.setLogLevel("none");
    this.createSVG(this.#key, input);
    this.send(subs, "test_signal_DC5B2");
  }
};
