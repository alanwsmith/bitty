async bittyReady() {
  this.sleep(100);
  this.setGlobalLogLevel("none");
  this.deleteFragment("el_38302");
  this.qs("[data-send~=signal_38302]").click();
}