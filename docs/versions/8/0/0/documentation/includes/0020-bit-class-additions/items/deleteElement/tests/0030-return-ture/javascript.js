#key = "el_signal_299D6";

test_signal_299D6(_, el) {
  const result = this.deleteElement(this.#key);
  if (result.ok === true) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.createElement(this.#key, `<div>ok</div>`);
  this.trigger("test_signal_299D6");
}