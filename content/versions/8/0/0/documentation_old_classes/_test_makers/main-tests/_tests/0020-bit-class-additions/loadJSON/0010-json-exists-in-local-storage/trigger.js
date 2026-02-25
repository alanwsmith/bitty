async bittyReady() {
  this.sleep(100);
  this.setGlobalLogLevel("none");
  this.createJSON("data_$HASH", { status: "test passed" });
  delete this.json["data_$HASH"];
  this.qs("[data-send~=$SIGNAL_NAME]").click();
}