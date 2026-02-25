$SIGNAL_NAME(_, el) {
  this.setLocalLogLevel("none");
  this.deleteElement("el_$HASH");
  this.loadElement("el_$HASH", `<div class="test">test passed</div>`);
  delete this._element["el_$HASH"];
  this.loadElement("el_$HASH");
  el.replaceWith(this.renderElement("el_$HASH"));
}
