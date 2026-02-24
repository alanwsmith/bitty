#key = "svg_signal_CEDB1";

signal_CEDB1(fallback, el) {
  this.loadSVG("el_CEDB1", fallback);
  const svg = this.renderSVG("el_CEDB1");
  // el.innerHTML = svg.querySelector("text").innerHTML;
  // this.send(svg, "view_signal_CEDB1");
}

view_signal_CEDB1(svg, el) {
  el.replaceWith(svg);
}


bittyReady() {
  this.trigger("given_signal_CEDB1");
}

given_signal_CEDB1(_, __) {
  const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>
</svg>`;
  const template = document.createElement("template");
  template.innerHTML = input;
  const fallback = template.content.querySelector("svg");
  this.setLocalLogLevel("none");
  this.deleteSVG("el_CEDB1");
  this.send(fallback, "signal_CEDB1");
}
