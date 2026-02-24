#key = "element_signal_E0312";

signal_E0312(_, el) {
  const result = this.updateElement();
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement(this.#key, `<div></div>`);
  this.trigger("signal_E0312");
}