signal_88717(_, el) {
  this.setLocalLogLevel("none");
  this.deleteFragment("el_88717");
  if (this.renderFragment("el_88717") === undefined) {
    el.innerHTML = "test passed";
  }
}
