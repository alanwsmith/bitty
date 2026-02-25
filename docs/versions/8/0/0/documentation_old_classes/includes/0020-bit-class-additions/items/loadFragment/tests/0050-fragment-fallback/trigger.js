async bittyReady() {
  this.sleep(100);
  this.setGlobalLogLevel("none");



  this.qs("[data-send~=signal_119D0]").click();
}
