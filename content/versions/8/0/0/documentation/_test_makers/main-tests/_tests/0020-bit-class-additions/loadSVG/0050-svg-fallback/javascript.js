#key = "svg_$SIGNAL_NAME";

$SIGNAL_NAME(fallback, el) {
  this.loadSVG("el_$HASH", fallback);
  const svg = this.renderSVG("el_$HASH");
  // el.innerHTML = svg.querySelector("text").innerHTML;
  // this.send(svg, "view_$SIGNAL_NAME");
}

view_$SIGNAL_NAME(svg, el) {
  el.replaceWith(svg);
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>
</svg>`;
  const template = document.createElement("template");
  template.innerHTML = input;
  const fallback = template.content.querySelector("svg");
  this.setLocalLogLevel("none");
  this.deleteSVG("el_$HASH");
  this.send(fallback, "$SIGNAL_NAME");
}
