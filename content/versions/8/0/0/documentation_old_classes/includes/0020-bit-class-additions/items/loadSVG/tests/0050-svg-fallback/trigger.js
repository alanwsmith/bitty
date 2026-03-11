async bittyReady() {
  this.sleep(100);
  this.qs("[data-send~=signal_CEDB1]").click();
}