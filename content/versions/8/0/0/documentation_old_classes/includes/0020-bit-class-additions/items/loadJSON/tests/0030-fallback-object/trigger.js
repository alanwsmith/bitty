async bittyReady() {
  this.sleep(100);
  this.setGlobalLogLevel("none");



  this.qs("[data-send~=signal_230A6]").click();
}
