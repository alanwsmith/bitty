$SIGNAL_NAME(_, el) {
  const newEl = document.createElement("div");
  newEl.classList.add("test");
  newEl.innerHTML = "test passed";
  this.createElement("el_$HASH", newEl);
  el.replaceWith(this.renderElement("el_$HASH"));
}

