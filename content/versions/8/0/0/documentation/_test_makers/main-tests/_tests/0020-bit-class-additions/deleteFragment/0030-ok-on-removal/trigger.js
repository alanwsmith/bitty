bittyReady() {
  this.setLocalLogLevel("none");
  this.createFragment("el_$HASH", "<div></div>");
  this.qs("[data-send~=$SIGNAL_NAME]").click();
}
