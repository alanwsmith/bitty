async bittyReady() {
  this.sleep(100);
  this.qs("[data-send~=signal_125F4]").click();
}