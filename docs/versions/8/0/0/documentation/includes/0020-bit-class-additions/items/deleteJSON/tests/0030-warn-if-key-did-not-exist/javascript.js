#key = "json_signal_AF25A";

test_signal_AF25A(_, el) {
  const result = this.deleteJSON(this.#key);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.trigger("test_signal_AF25A");
}