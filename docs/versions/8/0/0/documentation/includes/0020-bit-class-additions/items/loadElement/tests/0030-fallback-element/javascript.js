#key = "el_signal_31037";

signal_31037(_, el) {
  const newEl = document.createElement("div");
  newEl.classList.add("test");
  newEl.innerHTML = "ok";
  this.loadElement("el_31037", newEl);
  el.replaceWith(this.renderElement("el_31037"));
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteElement("el_31037");
  this.trigger("signal_31037");
}