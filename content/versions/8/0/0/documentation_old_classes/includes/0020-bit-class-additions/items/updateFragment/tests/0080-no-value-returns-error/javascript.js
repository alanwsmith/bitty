

signal_00B0F(_, el) {
  const result = this.updateFragment("el_00B0F");
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.trigger("given_signal_00B0F");
}

given_signal_00B0F(_, __) {
  this.setLocalLogLevel("none");
  this.trigger("signal_00B0F");
}