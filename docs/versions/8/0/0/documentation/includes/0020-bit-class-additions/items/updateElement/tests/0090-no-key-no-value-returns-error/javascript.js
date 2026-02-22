#key = "element_signal_E0312";

test_signal_E0312(_, el) {
  const result = this.updateElement();
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.createElement(this.#key, `<div></div>`);
  this.trigger("test_signal_E0312");
}