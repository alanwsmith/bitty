#key = "element_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const result = this.updateElement(this.#key, `<div></div>`);
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement(this.#key, `<div></div>`);
  this.trigger("$SIGNAL_NAME");
}