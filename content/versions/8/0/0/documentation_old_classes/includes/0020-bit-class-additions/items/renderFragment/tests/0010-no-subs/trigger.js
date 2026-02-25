async bittyReady() {
  this.sleep(100);
  this.qs("[data-send~=signal_FC310]").click();
}