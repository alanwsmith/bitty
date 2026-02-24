#key = "el_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  this.deleteElement(this.#key);
  if (this.renderElement(this.#key) === undefined) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement(this.#key, `<div>ok</div>`);
  this.trigger("$SIGNAL_NAME");
}