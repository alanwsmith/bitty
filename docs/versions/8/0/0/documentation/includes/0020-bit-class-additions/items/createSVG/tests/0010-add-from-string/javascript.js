window.Class58C94 = class {
  #key = "svg_signal_58C94";

  test_signal_58C94(input, el) {
    this.createSVG(this.#key, input);
    const svg = this.renderSVG(this.#key);
    el.innerHTML = svg.querySelector("text").innerHTML;
    this.send(svg, "view_signal_58C94");
  }

  view_signal_58C94(svg, el) {
    el.replaceWith(svg);
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
    this.send(input, "test_signal_58C94");
  }
};
