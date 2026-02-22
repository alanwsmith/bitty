#key = "el_signal_C244B";

test_signal_C244B(_, el) {
  const result = this.createElement(this.#key, { misc: "not a valid input" });
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.trigger("test_signal_C244B");
}