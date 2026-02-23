#key = "element_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const result = this.updateElement();
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement(this.#key, `<div></div>`);
  this.trigger("test_$SIGNAL_NAME");
}