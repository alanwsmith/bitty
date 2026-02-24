#key = "svg_signal_FE475";

signal_FE475(update, el) {
  this.updateSVG("el_FE475", update);
  const svg = this.renderSVG("el_FE475");
  // el.innerHTML = svg.querySelector("text").innerHTML;
  // this.send(svg, "view_signal_FE475");
}

view_signal_FE475(svg, el) {
  el.replaceWith(svg);
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteSVG("el_FE475");
  const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">bug</text>
</svg>`;
  this.createSVG("el_FE475", input);
  const template = document.createElement("template");
  template.innerHTML = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>
</svg>`;
  const update = template.content.querySelector("svg");
  this.send(update, "signal_FE475");
}
