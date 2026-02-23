#key = "svg_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const fragment = this.renderSVG(this.#key);
  if (fragment === undefined) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteSVG(this.#key);
  this.trigger("test_$SIGNAL_NAME");
}
