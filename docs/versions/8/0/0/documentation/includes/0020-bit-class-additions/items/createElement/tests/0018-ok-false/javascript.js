#key = "el_signal_2C3F3";

test_signal_2C3F3(_, el) {
  const result = this.createElement(this.#key, {
    misc: "invalid payload",
  });
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.trigger("test_signal_2C3F3");
}