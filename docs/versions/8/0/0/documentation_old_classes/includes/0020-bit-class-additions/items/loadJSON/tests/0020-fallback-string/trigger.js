async bittyReady() {
  this.sleep(100);
  this.setGlobalLogLevel("none");



  this.qs("[data-send~=signal_CEE9A]").click();
}
