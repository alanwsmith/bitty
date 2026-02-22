async bittyReady() {
  // delay to let other bit initialize
  await this.sleep(100);
  this.send({ status: "ok" }, "$SIGNAL2_NAME");
}


