async bittyReady() {
  this.sleep(100);
  this.qs("[data-send~=signal_FFDD5]").click();
}