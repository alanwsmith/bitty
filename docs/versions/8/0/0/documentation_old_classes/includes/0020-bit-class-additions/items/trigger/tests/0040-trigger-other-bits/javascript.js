async bittyReady() {
  // delay to let other bit initialize
  await this.sleep(100);
  this.trigger("signal_B1130_2");
}

