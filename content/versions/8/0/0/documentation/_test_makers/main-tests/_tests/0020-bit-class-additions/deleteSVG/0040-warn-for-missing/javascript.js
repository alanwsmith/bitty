#key = "svg_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const result = this.deleteSVG(this.#key);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteSVG(this.#key);
  this.trigger("$SIGNAL_NAME");
}