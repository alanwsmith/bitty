

signal_B2E8A(_, el) {
  const input = `
<svg version="1.1" width="300" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">test passed</text>
</svg>`;
  this.setLocalLogLevel("none");
  this.deleteSVG("el_B2E8A");
  this.loadSVG("el_B2E8A", input);
  delete this._svg["el_B2E8A"];
  this.loadSVG("el_B2E8A");
  const svg = this.renderSVG("el_B2E8A");
  el.innerHTML = svg.querySelector("text").innerHTML;
  this.send(svg, "view_signal_B2E8A");
}

view_signal_B2E8A(svg, el) {
  el.replaceWith(svg);
}
