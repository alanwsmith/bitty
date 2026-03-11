$SIGNAL_NAME(_, el) {
  this.loadFragment("el_$HASH");
  el.replaceWith(this.renderFragment("el_$HASH"));
}
