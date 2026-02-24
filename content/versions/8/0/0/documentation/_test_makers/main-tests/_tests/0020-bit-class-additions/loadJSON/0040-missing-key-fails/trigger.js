async bittyReady() {
  this.setLocalLogLevel("none");
  this.sleep(100);
  this.setGlobalLogLevel("none");
  localStorage.removeItem("missing_key_$SIGNAL_NAME");
  this.qs("[data-send~=$SIGNAL_NAME]").click();
}
