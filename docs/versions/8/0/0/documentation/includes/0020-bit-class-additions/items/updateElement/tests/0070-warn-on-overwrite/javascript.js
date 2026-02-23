#key = "element_signal_846F3";

test_signal_846F3(_, el) {
  const result = this.updateElement(this.#key, `<div></div>`);
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement(this.#key, `<div></div>`);
  this.trigger("test_signal_846F3");
}