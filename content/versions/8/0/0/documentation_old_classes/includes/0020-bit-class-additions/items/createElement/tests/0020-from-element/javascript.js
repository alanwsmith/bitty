signal_C54A9(_, el) {
  const newEl = document.createElement("div");
  newEl.classList.add("test");
  newEl.innerHTML = "test passed";
  this.createElement("el_C54A9", newEl);
  el.replaceWith(this.renderElement("el_C54A9"));
}

