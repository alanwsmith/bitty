$SIGNAL_NAME(_, el) {
  const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">test passed</text>
</svg>`;
  this.setLocalLogLevel("none");
  this.deleteSVG("el_$HASH");
  this.createSVG("el_$HASH", input);
  delete this._svg["el_$HASH"];
  this.loadSVG("el_$HASH");
  const svg = this.renderSVG("el_$HASH");
  el.innerHTML = svg.querySelector("text").innerHTML;
  this.send(svg, "view_$SIGNAL_NAME");
}

view_$SIGNAL_NAME(svg, el) {
  el.replaceWith(svg);
}

