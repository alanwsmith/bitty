#key = "svg_signal_DB540";

test_signal_DB540(_, el) {
  const result = this.loadSVG(this.#key);
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_signal_DB540");
}

given_signal_DB540(_, __) {
  this.setLogLevel("none");
  this.deleteSVG(this.#key);
  this.trigger("test_signal_DB540");
}