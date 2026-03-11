$SIGNAL_NAME(_, el) {
  this.loadElement("el_$HASH");
  el.replaceWith(this.renderElement("el_$HASH"));
}

