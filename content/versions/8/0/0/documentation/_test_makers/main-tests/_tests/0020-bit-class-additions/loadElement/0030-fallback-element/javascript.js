$SIGNAL_NAME(_, el) {
  this.setLocalLogLevel("none");
  this.deleteElement("el_$HASH");
  const newEl = document.createElement("div");
  newEl.classList.add("test");
  newEl.innerHTML = "test passed";
  this.loadElement("el_$HASH", newEl);
  el.replaceWith(this.renderElement("el_$HASH"));
}
