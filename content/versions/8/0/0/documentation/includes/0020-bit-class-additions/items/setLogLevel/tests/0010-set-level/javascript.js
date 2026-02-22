bittyReady() {
  this.trigger("given_signal_94188");
}

given_signal_94188(_, __) {
  this.trigger("test_signal_94188");
}

test_signal_94188(_, el) {
  this.setLogLevel("none");
  this.addLog("error", "test_signal_94188", false);
  el.innerHTML = "ok";
}