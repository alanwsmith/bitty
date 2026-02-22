bittyReady() {
  this.trigger("given_signal_E1B2F");
}

given_signal_E1B2F(_, __) {
  this.trigger("test_signal_E1B2F");
}

async test_signal_E1B2F(_, el) {
  const logLevel = this.getLogLevel();
  if (logLevel === "warn") {
    el.innerHTML = "ok";
  }
}