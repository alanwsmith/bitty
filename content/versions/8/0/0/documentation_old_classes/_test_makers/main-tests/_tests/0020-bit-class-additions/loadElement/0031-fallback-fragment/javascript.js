$SIGNAL_NAME(_, el) {
  this.setLocalLogLevel("none");
  this.deleteElement("el_$HASH");
  const template = document.createElement("template");
  template.innerHTML = `<div class="test">test passed</div>`;
  this.loadElement("el_$HASH", template.content);
  el.replaceWith(this.renderElement("el_$HASH"));
}
