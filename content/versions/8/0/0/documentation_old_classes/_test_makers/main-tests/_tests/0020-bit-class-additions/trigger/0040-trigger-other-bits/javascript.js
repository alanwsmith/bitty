async bittyReady() {
  // delay to let other bit initialize
  await this.sleep(100);
  this.trigger("$SIGNAL2_NAME");
}

