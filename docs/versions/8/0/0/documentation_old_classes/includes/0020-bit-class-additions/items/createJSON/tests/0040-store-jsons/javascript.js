
signal_41D2B(_, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  this.deleteJSON("el_41D2B");
  this.createJSON("el_41D2B", { status: "test passed" });
  delete this.json["el_41D2B"];
  this.loadJSON("el_41D2B");
  el.innerHTML = this.json["el_41D2B"].status;
}
