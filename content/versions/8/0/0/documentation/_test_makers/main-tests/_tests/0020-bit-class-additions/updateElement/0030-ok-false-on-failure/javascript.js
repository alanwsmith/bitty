#key = "element_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
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
  this.trigger("$SIGNAL_NAME");
}