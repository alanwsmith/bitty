#key = "element_$SIGNAL_NAME";

$SIGNAL_NAME(newElement, el) {
  this.updateElement("el_$HASH", newElement);
  el.replaceWith(this.renderElement("el_$HASH"));
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement("el_$HASH", `<div class="test">bug</div>`);
  const element = document.createElement("div");
  element.classList.add("test");
  element.innerHTML = "test passed";
  this.send(element, "$SIGNAL_NAME");
}