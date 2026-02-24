async bittyReady() {
  // delay to let other bit initialize
  await this.sleep(100);
  this.send({ status: "test passed" }, "$SIGNAL2_NAME");
}


