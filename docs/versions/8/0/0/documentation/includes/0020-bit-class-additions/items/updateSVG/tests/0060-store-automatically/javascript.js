#key = "svg_signal_2EB3B";

signal_2EB3B(_, el) {
  this.loadSVG(this.#key);
  const svg = this.renderSVG(this.#key);
  // el.innerHTML = svg.querySelector("text").textContent;
  // this.send(svg, "view_signal_2EB3B");
}

view_signal_2EB3B(svg, el) {
  el.replaceWith(svg);
}


bittyReady() {
  this.setLocalLogLevel("none");
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
  this.updateSVG(this.#key, update);
  this.trigger("signal_2EB3B");
}
