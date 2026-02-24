

$SIGNAL_NAME(_, el) {
  const result = this.deleteFragment("el_$HASH");
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.deleteFragment("el_$HASH");
  this.trigger("$SIGNAL_NAME");
}