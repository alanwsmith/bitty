async bittyReady() {
  this.sleep(100);
  this.setGlobalLogLevel("none");
  this.qs("[data-send~=signal_92D8A]").click();
}
