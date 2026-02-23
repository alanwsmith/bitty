#key = "fragment_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const result = this.updateFragment();
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.trigger("test_$SIGNAL_NAME");
}