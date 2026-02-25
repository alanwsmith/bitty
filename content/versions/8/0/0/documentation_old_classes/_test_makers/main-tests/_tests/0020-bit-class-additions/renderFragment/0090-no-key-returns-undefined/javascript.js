

$SIGNAL_NAME(_, el) {
  const fragment = this.renderFragment("el_$HASH");
  if (fragment === undefined) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.deleteFragment("el_$HASH");
  this.trigger("$SIGNAL_NAME");
}
