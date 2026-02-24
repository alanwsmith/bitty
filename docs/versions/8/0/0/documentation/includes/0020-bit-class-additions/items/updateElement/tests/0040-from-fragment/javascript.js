#key = "element_signal_66521";

signal_66521(newElement, el) {
  this.updateElement("el_66521", newElement);
  el.replaceWith(this.renderElement("el_66521"));
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement("el_66521", `<div class="test">bug</div>`);
  const fragment = document.createDocumentFragment();
  const element = document.createElement("div");
  element.classList.add("test");
  element.innerHTML = "ok";
  fragment.appendChild(element);
  this.send(fragment, "signal_66521");
}