#key = "el_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const template = document.createElement("template");
  template.innerHTML = `<div class="test">ok</div>`;
  this.loadElement("el_$HASH", template.content);
  el.replaceWith(this.renderElement("el_$HASH"));
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteElement("el_$HASH");
  this.trigger("$SIGNAL_NAME");
}