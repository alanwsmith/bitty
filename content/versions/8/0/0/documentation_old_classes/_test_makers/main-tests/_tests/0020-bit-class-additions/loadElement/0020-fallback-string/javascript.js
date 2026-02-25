$SIGNAL_NAME(_, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  this.deleteElement("el_$HASH");
  this.loadElement("el_$HASH", `<div class="test">test passed</div>`);
  el.replaceWith(this.renderElement("el_$HASH"));
}

