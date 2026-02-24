#key = "el_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const result = this.deleteElement(this.#key);
  if (result.ok === true) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement(this.#key, `<div>ok</div>`);
  this.trigger("$SIGNAL_NAME");
}