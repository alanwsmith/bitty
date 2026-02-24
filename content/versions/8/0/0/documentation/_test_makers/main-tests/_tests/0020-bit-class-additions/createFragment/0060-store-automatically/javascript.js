$SIGNAL_NAME(_, el) {
  this.deleteFragment("el_$HASH");
  this.createFragment("el_$HASH", `<div class="test">test passed</div>`);
  delete this._fragment["el_$HASH"];
  const result = this.loadFragment("el_$HASH");
  el.replaceWith(this.renderFragment("el_$HASH"));
}
