async bittyReady() {
  this.sleep(100);
  this.setGlobalLogLevel("none");



  this.qs("[data-send~=$SIGNAL_NAME]").click();
}
