window.Class15988 = class {
  #key = "svg_signal_15988";

  test_signal_15988(_, el) {
    const replacementEl = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text",
    );
    replacementEl.setAttribute("x", "30");
    replacementEl.setAttribute("y", "24");
    replacementEl.setAttribute("font-size", "20");
    replacementEl.setAttribute("text-anchor", "middle");
    replacementEl.setAttribute("fill", "white");
    replacementEl.textContent = "ok";
    const subs = {
      "TARGET_15988": replacementEl,
    };
    const svg = this.renderSVG(this.#key, subs);
    el.innerHTML = svg.querySelector("text").textContent;
    this.send(svg, "view_signal_15988");
  }

  view_signal_15988(svg, el) {
    el.replaceWith(svg);
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  TARGET_15988
</svg>`;
    this.setLogLevel("none");
    this.createSVG(this.#key, input);
    this.trigger("test_signal_15988");
  }
};
