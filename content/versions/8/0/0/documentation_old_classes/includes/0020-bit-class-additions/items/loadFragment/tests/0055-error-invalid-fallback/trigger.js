async bittyReady() {
  this.setGlobalLogLevel("none");
  this.sleep(100);
  this.qs("[data-send~=signal_99F17]").click();
}
