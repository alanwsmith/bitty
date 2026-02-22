bittyReady() {
  this.send({ status: "ok" }, "$SIGNAL_NAME");
}

$SIGNAL_NAME(payload, el) {
  el.innerHTML = payload.status;
}