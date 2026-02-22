#key = "el_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const elementString = `<div>ok</div>`;
  const result = this.createElement(this.#key, elementString);
  if (result.ok === true) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("test_$SIGNAL_NAME");
}