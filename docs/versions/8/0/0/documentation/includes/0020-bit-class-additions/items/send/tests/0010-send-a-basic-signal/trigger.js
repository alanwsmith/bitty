async bittyReady() {
  this.sleep(100);
  this.send({ status: "test passed" }, "signal_DFC26");
}

