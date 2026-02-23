bittyReady() {
  this.trigger("given_signal_64E6B");
}

given_signal_64E6B(_, __) {
  this.trigger("test_signal_64E6B");
}

test_signal_64E6B(_, el) {
  // this.setLocalLogLevel("none");
  // this.addLog({ level: "error", ok: false, messages: ["test_signal_64E6B"]});
  // el.innerHTML = "ok";
}
