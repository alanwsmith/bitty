$SIGNAL_NAME(_, el) {
  if (el.getValue() === "test passed") {
    this.trigger("verify_$SIGNAL_NAME");
  }
}

verify_$SIGNAL_NAME(_, el) {
  el.innerHTML = "test passed";
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}