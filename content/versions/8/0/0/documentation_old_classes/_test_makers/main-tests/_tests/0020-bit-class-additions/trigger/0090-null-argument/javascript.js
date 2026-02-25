bittyReady() {
  this.trigger("$SIGNAL_NAME");
}

$SIGNAL_NAME(ev, el) {
  if (ev === null) {
    el.innerHTML = "test passed";
  }
}