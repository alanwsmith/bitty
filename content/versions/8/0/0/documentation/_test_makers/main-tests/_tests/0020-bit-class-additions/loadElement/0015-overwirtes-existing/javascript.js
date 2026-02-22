#key = "el_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const result = this.loadElement(this.#key);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.deleteElement(this.#key);
  this.setLogLevel("none");
  this.createElement(this.#key, `<div>ok</div>`);
  this.trigger("test_$SIGNAL_NAME");
}