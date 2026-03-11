bittyReady() {
  this.send(
    { status: "test passed" },
    `$SIGNAL_NAME $SIGNAL2_NAME $SIGNAL3_NAME`,
  );
}

$SIGNAL_NAME(payload, el) {
  el.innerHTML = payload.status;
}

$SIGNAL2_NAME(payload, el) {
  el.innerHTML = payload.status;
}

$SIGNAL3_NAME(payload, el) {
  el.innerHTML = payload.status;
}