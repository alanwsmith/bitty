bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.trigger("test_$SIGNAL_NAME");
}

test_$SIGNAL_NAME(_, el) {
  // this.setLogLevel("none");
  // this.addLog({ level: "error", ok: false, messages: ["test_$SIGNAL_NAME"]});
  // el.innerHTML = "ok";
}
