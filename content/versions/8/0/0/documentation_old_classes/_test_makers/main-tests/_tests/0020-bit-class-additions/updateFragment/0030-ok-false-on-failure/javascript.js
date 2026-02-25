

$SIGNAL_NAME(_, el) {
  const result = this.updateFragment("el_$HASH", {
    key: "not a string, element, or document fragment",
  });
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.trigger("$SIGNAL_NAME");
}