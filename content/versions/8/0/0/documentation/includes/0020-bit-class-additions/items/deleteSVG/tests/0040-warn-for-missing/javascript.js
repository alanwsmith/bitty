#key = "svg_signal_A473A";

test_signal_A473A(_, el) {
  const result = this.deleteSVG(this.#key);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteSVG(this.#key);
  this.trigger("test_signal_A473A");
}