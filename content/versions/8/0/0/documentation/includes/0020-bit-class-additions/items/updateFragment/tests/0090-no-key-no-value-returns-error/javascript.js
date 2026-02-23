#key = "fragment_signal_6F768";

test_signal_6F768(_, el) {
  const result = this.updateFragment();
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_signal_6F768");
}

given_signal_6F768(_, __) {
  this.setLocalLogLevel("none");
  this.trigger("test_signal_6F768");
}