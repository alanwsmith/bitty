#key = "el_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  this.deleteElement(this.#key);
  if (this.renderElement(this.#key) === undefined) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.createElement(this.#key, `<div>ok</div>`);
  this.trigger("test_$SIGNAL_NAME");
}