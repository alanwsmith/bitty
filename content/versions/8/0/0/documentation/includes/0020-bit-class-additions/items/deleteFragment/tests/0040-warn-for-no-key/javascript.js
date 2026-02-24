

signal_B0E93(_, el) {
  const result = this.deleteFragment("el_B0E93");
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.trigger("given_signal_B0E93");
}

given_signal_B0E93(_, __) {
  this.setLocalLogLevel("none");
  this.deleteFragment("el_B0E93");
  this.trigger("signal_B0E93");
}