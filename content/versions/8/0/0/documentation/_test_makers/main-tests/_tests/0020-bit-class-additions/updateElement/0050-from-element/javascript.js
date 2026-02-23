#key = "element_$SIGNAL_NAME";

test_$SIGNAL_NAME(newElement, el) {
  this.updateElement(this.#key, newElement);
  el.replaceWith(this.renderElement(this.#key));
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement(this.#key, `<div class="test">bug</div>`);
  const element = document.createElement("div");
  element.classList.add("test");
  element.innerHTML = "ok";
  this.send(element, "test_$SIGNAL_NAME");
}