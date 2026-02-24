#key = "el_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const newEl = document.createElement("div");
  newEl.classList.add("test");
  newEl.innerHTML = "test passed";
  this.loadElement("el_$HASH", newEl);
  el.replaceWith(this.renderElement("el_$HASH"));
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteElement("el_$HASH");
  this.trigger("$SIGNAL_NAME");
}