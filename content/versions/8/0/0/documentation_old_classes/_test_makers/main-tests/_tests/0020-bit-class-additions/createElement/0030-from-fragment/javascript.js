$SIGNAL_NAME(_, el) {
  const template = document.createElement("template");
  template.innerHTML = `<div class="test">test passed</div>`;
  this.createElement("el_$HASH", template.content);
  el.replaceWith(this.renderElement("el_$HASH"));
}
