async bittyReady() {
  this.sleep(100);
  this.qs("[data-send~=signal_F8955]").click();
}