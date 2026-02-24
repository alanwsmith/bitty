bittyReady() {
  this.send("test passed", "$SIGNAL_NAME");
}

$SIGNAL_NAME(payload, el) {
  el.innerHTML = payload;
}