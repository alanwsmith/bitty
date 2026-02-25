

signal_6F768(_, el) {
  const result = this.updateFragment();
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.trigger("given_signal_6F768");
}

given_signal_6F768(_, __) {
  this.setLocalLogLevel("none");
  this.trigger("signal_6F768");
}