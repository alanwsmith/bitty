#key = "element_$SIGNAL_NAME";

$SIGNAL_NAME(newElement, el) {
  this.updateElement(this.#key, newElement);
  el.replaceWith(this.renderElement(this.#key));
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement(this.#key, `<div class="test">bug</div>`);
  const fragment = document.createDocumentFragment();
  const element = document.createElement("div");
  element.classList.add("test");
  element.innerHTML = "ok";
  fragment.appendChild(element);
  this.send(fragment, "$SIGNAL_NAME");
}