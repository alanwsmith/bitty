window.Class5112B = class {
  #key = "svg_signal_5112B";

  test_signal_5112B(input, el) {
    this.createSVG(this.#key, input);
    const svg = this.renderSVG(this.#key);
    el.innerHTML = svg.querySelector("text").innerHTML;
    this.send(svg, "view_signal_5112B");
  }

  view_signal_5112B(svg, el) {
    el.replaceWith(svg);
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    const input = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    input.setAttribute("width", "60");
    input.setAttribute("height", "40");
    input.innerHTML = `<rect width="100%" height="100%" fill="green" />
  <text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>`;
    this.send(input, "test_signal_5112B");
  }
};
