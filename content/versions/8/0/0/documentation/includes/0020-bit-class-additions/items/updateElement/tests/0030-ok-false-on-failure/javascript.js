#key = "element_signal_BDBD6";

test_signal_BDBD6(_, el) {
  const result = this.updateElement(this.#key, {
    key: "not a string, element, or document fragment",
  });
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement(this.#key, `<div></div>`);
  this.trigger("test_signal_BDBD6");
}