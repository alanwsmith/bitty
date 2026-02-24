async bittyReady() {
  this.sleep(100);
  this.setGlobalLogLevel("none");
  this.deleteFragment("el_$HASH");
  this.qs("[data-send~=$SIGNAL_NAME]").click();
}
