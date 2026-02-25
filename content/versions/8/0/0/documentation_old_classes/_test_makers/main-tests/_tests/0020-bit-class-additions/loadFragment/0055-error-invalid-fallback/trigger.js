async bittyReady() {
  this.setGlobalLogLevel("none");
  this.sleep(100);
  this.qs("[data-send~=$SIGNAL_NAME]").click();
}
