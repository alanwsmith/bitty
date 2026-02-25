async bittyReady() {
  this.sleep(100);
  this.setGlobalLogLevel("none");
  this.deleteFragment("el_5A3FB");
  this.qs("[data-send~=signal_5A3FB]").click();
}
