bittyReady() {
  this.trigger("given_signal_194AD");
}

given_signal_194AD(_, __) {
  this.setLocalLogLevel("none");
  localStorage.removeItem("missing_key_signal_194AD");
  this.trigger("signal_194AD");
}

signal_194AD(_, el) {
  const result = this.loadJSON("missing_key_signal_194AD");
  if (result.ok === false) {
    el.innerHTML = "test passed";
  }
}