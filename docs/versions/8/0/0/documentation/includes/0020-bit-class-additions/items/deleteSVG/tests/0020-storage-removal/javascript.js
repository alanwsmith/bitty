#key = "svg_signal_1D251";

signal_1D251(_, el) {
  this.deleteSVG(this.#key);
  const result = this.loadSVG(this.#key);
  if (result.level === "error" && result.ok === false) {
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
  this.createSVG(this.#key, input);
  this.trigger("signal_1D251");
}