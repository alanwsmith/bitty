

signal_E279E(_, el) {
  this.deleteFragment("el_E279E");
  const result = this.loadFragment("el_E279E");
  if (result.ok === false) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.trigger("given_signal_E279E");
}

given_signal_E279E(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment("el_E279E", "<div></div>");
  this.trigger("signal_E279E");
}