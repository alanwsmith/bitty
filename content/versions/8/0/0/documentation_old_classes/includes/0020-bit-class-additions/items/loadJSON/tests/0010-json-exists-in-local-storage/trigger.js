async bittyReady() {
  this.sleep(100);
  this.setGlobalLogLevel("none");
  this.createJSON("data_C89F4", { status: "test passed" });
  delete this.json["data_C89F4"];
  this.qs("[data-send~=signal_C89F4]").click();
}