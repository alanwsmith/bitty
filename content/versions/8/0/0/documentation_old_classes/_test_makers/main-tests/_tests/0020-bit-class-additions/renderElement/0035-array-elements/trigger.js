async bittyReady() {
  this.sleep(100);
  this.qs("[data-send~=$SIGNAL_NAME]").click();
}