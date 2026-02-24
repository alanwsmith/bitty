#key = "svg_signal_CB6CF";

signal_CB6CF(_, el) {
  this.deleteSVG("el_CB6CF");
  if (this.renderSVG("el_CB6CF") === undefined) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  const input = `
vg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>
svg>`;
  this.setLocalLogLevel("none");
  this.createSVG("el_CB6CF", input);
  this.trigger("signal_CB6CF");
}