async bittyReady() {
  this.sleep(100);
  this.setLocalLogLevel("none");
  this.deleteSVG("el_$HASH");
  this.qs("[data-send~=$SIGNAL_NAME]").click();
}