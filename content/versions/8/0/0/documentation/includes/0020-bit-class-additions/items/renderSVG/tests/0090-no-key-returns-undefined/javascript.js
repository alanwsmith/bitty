#key = "svg_signal_01959";

test_signal_01959(_, el) {
  const fragment = this.renderSVG(this.#key);
  if (fragment === undefined) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.deleteSVG(this.#key);
  this.trigger("test_signal_01959");
}