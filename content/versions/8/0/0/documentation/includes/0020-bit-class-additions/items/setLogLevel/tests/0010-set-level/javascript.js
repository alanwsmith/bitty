bittyReady() {
  this.trigger("given_signal_94188");
}

given_signal_94188(_, __) {
  this.trigger("test_signal_94188");
}

test_signal_94188(_, el) {
  // this.setLogLevel("none");
  // this.addLog({ level: "error", ok: false, messages: ["test_signal_94188"]});
  // el.innerHTML = "ok";
}
