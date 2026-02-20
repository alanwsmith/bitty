window.ClassB1C55 = class {
  #key = "svg_signal_B1C55";

  test_signal_B1C55(_, el) {
    const replacementEl = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text",
    );
    replacementEl.setAttribute("x", "30");
    replacementEl.setAttribute("y", "24");
    replacementEl.setAttribute("font-size", "20");
    replacementEl.setAttribute("text-anchor", "middle");
    replacementEl.setAttribute("fill", "white");
    replacementEl.text = "ok";
    const subs = {
      "TARGET_B1C55": replacementEl,
    };
    const svg = this.renderSVG(this.#key, subs);
    el.innerHTML = svg.querySelector("text").innerHTML;
    this.send(svg, "view_signal_B1C55");
  }

  view_signal_B1C55(svg, el) {
    el.replaceWith(svg);
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  TARGET_B1C55
</svg>`;
    this.setLogLevel("none");
    this.createSVG(this.#key, input);
    this.trigger("test_signal_B1C55");
  }
};
