#key = "json_signal_45CAA";

test_signal_45CAA(_, el) {
  const result = this.createJSON(this.#key);
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("test_signal_45CAA");
}