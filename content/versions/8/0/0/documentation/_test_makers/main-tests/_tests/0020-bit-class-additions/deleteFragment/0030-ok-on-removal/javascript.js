

$SIGNAL_NAME(_, el) {
  const result = this.deleteFragment("el_$HASH");
  if (result.ok === true) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment("el_$HASH", "<div></div>");
  this.trigger("$SIGNAL_NAME");
}