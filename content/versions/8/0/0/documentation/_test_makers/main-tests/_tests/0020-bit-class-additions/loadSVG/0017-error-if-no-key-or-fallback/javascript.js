#key = "svg_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const result = this.loadSVG(this.#key);
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.deleteSVG(this.#key);
  this.trigger("$SIGNAL_NAME");
}
