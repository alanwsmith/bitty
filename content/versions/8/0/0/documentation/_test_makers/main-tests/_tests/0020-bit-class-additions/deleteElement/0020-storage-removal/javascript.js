#key = "el_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  this.deleteElement(this.#key);
  const result = this.loadElement(this.#key);
  if (result.level === "error" && result.ok === false) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.createElement(this.#key, `<div>ok</div>`);
  this.trigger("test_$SIGNAL_NAME");
}