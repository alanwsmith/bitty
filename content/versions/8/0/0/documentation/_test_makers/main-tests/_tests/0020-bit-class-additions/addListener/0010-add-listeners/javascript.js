async bittyReady() {
  this.addSignalListener("customevent$HASH", "$SIGNAL_NAME");
  this.sleep(100);
  const targetEvent = new CustomEvent$HASH();
  dispatchEvent(targetEvent);
}

$SIGNAL_NAME(_, el) {
  el.innerHTML = "test passed";
}
