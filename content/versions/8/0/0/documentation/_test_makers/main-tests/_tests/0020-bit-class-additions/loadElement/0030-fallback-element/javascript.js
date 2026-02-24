#key = "el_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const newEl = document.createElement("div");
  newEl.classList.add("test");
  newEl.innerHTML = "ok";
  this.loadElement(this.#key, newEl);
  el.replaceWith(this.renderElement(this.#key));
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteElement(this.#key);
  this.trigger("$SIGNAL_NAME");
}