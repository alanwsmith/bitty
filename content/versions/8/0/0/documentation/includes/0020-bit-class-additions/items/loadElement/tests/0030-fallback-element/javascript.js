#key = "el_signal_31037";

test_signal_31037(_, el) {
  const newEl = document.createElement("div");
  newEl.classList.add("test");
  newEl.innerHTML = "ok";
  this.loadElement(this.#key, newEl);
  el.replaceWith(this.renderElement(this.#key));
}


bittyReady() {
  this.setLogLevel("none");
  this.deleteElement(this.#key);
  this.trigger("test_signal_31037");
}