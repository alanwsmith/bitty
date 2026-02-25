signal_31037(_, el) {
  this.setLocalLogLevel("none");
  this.deleteElement("el_31037");
  const newEl = document.createElement("div");
  newEl.classList.add("test");
  newEl.innerHTML = "test passed";
  this.loadElement("el_31037", newEl);
  el.replaceWith(this.renderElement("el_31037"));
}
