#key = "element_signal_45896";

signal_45896(newElement, el) {
  this.updateElement("el_45896", newElement);
  el.replaceWith(this.renderElement("el_45896"));
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement("el_45896", `<div class="test">bug</div>`);
  const element = document.createElement("div");
  element.classList.add("test");
  element.innerHTML = "ok";
  this.send(element, "signal_45896");
}