async bittyReady() {
  this.sleep(100);
  this.createJSON("el_$HASH", {});
  this.qs("[data-send~=$SIGNAL_NAME]").click();
}
