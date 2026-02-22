#key = "el_signal_73040";

test_signal_73040(_, el) {
  const result = this.createElement(this.#key);
  if (result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.trigger("test_signal_73040");
}