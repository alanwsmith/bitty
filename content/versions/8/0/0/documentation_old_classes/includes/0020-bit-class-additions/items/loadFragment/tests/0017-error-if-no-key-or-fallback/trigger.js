async bittyReady() {
  this.sleep(100);
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  this.deleteFragment("el_7EF03");
  this.qs("[data-send~=signal_7EF03]").click();
}