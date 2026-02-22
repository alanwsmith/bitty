#key = "el_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const result = this.loadElement(this.#key);
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.deleteElement(this.#key);
  this.createElement(this.#key, `<div>ok</div>`);
  delete this._element[this.#key];
  this.trigger("test_$SIGNAL_NAME");
}