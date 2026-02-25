async bittyReady() {
  this.setGlobalLogLevel("none")
  this.setLocalLogLevel("none")
  this.sleep(100);
  this.deleteFragment("el_C87DB");
  this.qs("[data-send~=signal_C87DB]").click();
}
