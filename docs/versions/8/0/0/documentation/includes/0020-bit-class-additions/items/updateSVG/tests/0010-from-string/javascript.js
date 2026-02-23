#key = "svg_signal_433FA";

test_signal_433FA(update, el) {
  this.updateSVG(this.#key, update);
  const svg = this.renderSVG(this.#key);
  // el.innerHTML = svg.querySelector("text").innerHTML;
  // this.send(svg, "view_signal_433FA");
}

view_signal_433FA(svg, el) {
  el.replaceWith(svg);
}


bittyReady() {
  this.setLogLevel("none");
  this.deleteSVG(this.#key);
  const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">bug</text>
</svg>`;
  this.createSVG(this.#key, input);
  const update = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>
</svg>`;
  this.send(update, "test_signal_433FA");
}
