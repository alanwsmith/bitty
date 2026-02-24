bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.trigger("$SIGNAL_NAME");
}

$SIGNAL_NAME(_, el) {
  const result = this.loadJSON("missing_key_$SIGNAL_NAME", "invalid json");
  if (result.ok === false) {
    el.innerHTML = "ok";
  }
}