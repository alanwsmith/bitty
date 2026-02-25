$SIGNAL_NAME(_, el) {
  this.loadFragment("el_$HASH", `<div></div><div class="test">test passed</div>`);
  el.replaceWith(this.renderFragment("el_$HASH"));
}
