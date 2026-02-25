

signal_AD946(_, el) {
  const fragment = this.renderFragment("el_AD946");
  if (fragment === undefined) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.trigger("given_signal_AD946");
}

given_signal_AD946(_, __) {
  this.setLocalLogLevel("none");
  this.deleteFragment("el_AD946");
  this.trigger("signal_AD946");
}
