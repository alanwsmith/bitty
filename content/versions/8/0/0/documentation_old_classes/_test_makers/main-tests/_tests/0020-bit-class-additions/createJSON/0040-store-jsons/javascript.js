
$SIGNAL_NAME(_, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  this.deleteJSON("el_$HASH");
  this.createJSON("el_$HASH", { status: "test passed" });
  delete this.json["el_$HASH"];
  this.loadJSON("el_$HASH");
  el.innerHTML = this.json["el_$HASH"].status;
}
