

signal_2EB3B(_, el) {
  this.loadSVG("el_2EB3B");
  const svg = this.renderSVG("el_2EB3B");
  // el.innerHTML = svg.querySelector("text").textContent;
  // this.send(svg, "view_signal_2EB3B");
}

view_signal_2EB3B(svg, el) {
  el.replaceWith(svg);
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteSVG("el_2EB3B");
  const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">bug</text>
</svg>`;
  this.createSVG("el_2EB3B", input);
  const update = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>
</svg>`;
  this.updateSVG("el_2EB3B", update);
  this.trigger("signal_2EB3B");
}
