#key = "element_signal_45896";

signal_45896(newElement, el) {
  this.updateElement(this.#key, newElement);
  el.replaceWith(this.renderElement(this.#key));
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement(this.#key, `<div class="test">bug</div>`);
  const element = document.createElement("div");
  element.classList.add("test");
  element.innerHTML = "ok";
  this.send(element, "signal_45896");
}