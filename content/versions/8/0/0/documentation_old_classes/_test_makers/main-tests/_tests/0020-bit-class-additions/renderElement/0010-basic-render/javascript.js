$SIGNAL_NAME(_, el) {
  this.createElement("el_$HASH", `<div class="test">test passed</div>`);
  el.replaceWith(this.renderElement("el_$HASH"));
}
