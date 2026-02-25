bittyReady() {
  this.trigger(
    `$SIGNAL_NAME $SIGNAL2_NAME $SIGNAL3_NAME`,
  );
}

$SIGNAL_NAME(_, el) {
  el.innerHTML = "test passed";
}

$SIGNAL2_NAME(_, el) {
  el.innerHTML = "test passed";
}

$SIGNAL3_NAME(_, el) {
  el.innerHTML = "test passed";
}