signal_2D8D5(_, el) {  
  const input = `
<svg version="1.1" width="300" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">test passed</text>
</svg>`;
  this.setLocalLogLevel("none");
  this.createSVG("el_2D8D5", input);
  delete this._svg["el_2D8D5"];
  this.loadSVG("el_2D8D5");
  const svg = this.renderSVG("el_2D8D5");
  el.innerHTML = svg.querySelector("text").innerHTML;
  this.send(svg, "view_signal_2D8D5");
}

view_signal_2D8D5(svg, el) {
  el.replaceWith(svg);
}
