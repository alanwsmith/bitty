async bittyReady() {
  this.sleep(100);
  this.qs("[data-send~=signal_00B6E]").click();
}