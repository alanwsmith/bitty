#key = "svg_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const fragment = this.renderSVG(this.#key);
  if (fragment === undefined) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteSVG(this.#key);
  this.trigger("$SIGNAL_NAME");
}
