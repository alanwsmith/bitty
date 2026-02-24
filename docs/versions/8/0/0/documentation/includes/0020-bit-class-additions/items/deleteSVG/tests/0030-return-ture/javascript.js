#key = "svg_signal_35ED0";

signal_35ED0(_, el) {
  const result = this.deleteSVG("el_35ED0");
  if (result.ok === true) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  const input = `
vg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>
svg>`;
  this.setLocalLogLevel("none");
  this.createSVG("el_35ED0", input);
  this.trigger("signal_35ED0");
}