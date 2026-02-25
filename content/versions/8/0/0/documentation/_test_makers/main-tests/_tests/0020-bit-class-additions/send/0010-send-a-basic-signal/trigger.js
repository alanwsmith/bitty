async bittyReady() {
  this.sleep(100);
  this.send({ status: "test passed" }, "$SIGNAL_NAME");
}

