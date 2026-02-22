#key = "svg_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const result = this.deleteSVG(this.#key);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.deleteSVG(this.#key);
  this.trigger("test_$SIGNAL_NAME");
}