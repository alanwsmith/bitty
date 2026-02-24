#key = "svg_signal_01959";

signal_01959(_, el) {
  const fragment = this.renderSVG(this.#key);
  if (fragment === undefined) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteSVG(this.#key);
  this.trigger("signal_01959");
}
