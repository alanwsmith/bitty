async bittyReady() {
  this.sleep(100);
  this.setLocalLogLevel("none");
  this.deleteFragment("el_B0E93");
  this.qs("[data-send~=signal_B0E93]").click();
}
