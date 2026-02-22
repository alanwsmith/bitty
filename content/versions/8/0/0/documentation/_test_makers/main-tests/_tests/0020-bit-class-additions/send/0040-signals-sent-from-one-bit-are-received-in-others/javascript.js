async bittyReady() {
  // delay to let other bit initialize
  await this.sleep(100);
  this.send({ status: "ok" }, "$SIGNAL2_NAME");
}


ndow.$CLASS2_NAME = class {
$SIGNAL2_NAME(payload, el) {
  el.innerHTML = payload.status;
}