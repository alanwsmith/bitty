#key = "element_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const result = this.updateElement(this.#key);
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.createElement(this.#key, `<div></div>`);
  this.trigger("test_$SIGNAL_NAME");
}