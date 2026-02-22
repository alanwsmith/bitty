#key = "svg_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const result = this.updateSVG(this.#key);
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.deleteSVG(this.#key);
  const input = `
vg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">bug</text>
svg>`;
  this.createSVG(this.#key, input);
  this.trigger("test_$SIGNAL_NAME");
}