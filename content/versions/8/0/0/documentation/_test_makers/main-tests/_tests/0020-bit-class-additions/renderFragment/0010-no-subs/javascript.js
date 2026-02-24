$SIGNAL_NAME(_, el) {
  this.createFragment("fragment_$HASH", `<div></div><div class="test">test passed</div>`);
  const fragment = this.renderFragment("fragment_$HASH");
 el.replaceWith(this.renderFragment("fragment_$HASH"));
}
