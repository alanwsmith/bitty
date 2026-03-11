signal_D4DA1(_, el) {
  const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">test passed</text>
</svg>`;
  this.setLocalLogLevel("none");
  this.deleteSVG("el_D4DA1");
  this.createSVG("el_D4DA1", input);
  delete this._svg["el_D4DA1"];
  this.loadSVG("el_D4DA1");
  const svg = this.renderSVG("el_D4DA1");
  el.innerHTML = svg.querySelector("text").innerHTML;
  this.send(svg, "view_signal_D4DA1");
}

view_signal_D4DA1(svg, el) {
  el.replaceWith(svg);
}

