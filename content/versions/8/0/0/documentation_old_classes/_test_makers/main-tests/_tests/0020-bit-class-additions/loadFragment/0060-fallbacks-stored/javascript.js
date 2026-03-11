$SIGNAL_NAME(fallbackFragment, el) {
  this.loadFragment("el_$HASH");
  el.replaceWith(this.renderFragment("el_$HASH"));
}
