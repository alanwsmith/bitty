#key = "element_signal_D4BFF";

test_signal_D4BFF(_, el) {
  const result = this.updateElement(this.#key, `<div></div>`);
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement(this.#key, `<div class="test">bug</div>`);
  this.trigger("test_signal_D4BFF");
}