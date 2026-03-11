async bittyReady() {
  // delay to let other bit initialize
  await this.sleep(100);
  this.send({ status: "test passed" }, "signal_F8EF8_2");
}


