async bittyReady() {
  this.setGlobalLogLevel("none")
  this.setLocalLogLevel("none")
  this.sleep(100);
  this.deleteFragment("el_$HASH");
  this.qs("[data-send~=$SIGNAL_NAME]").click();
}
