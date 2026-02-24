#key = "json_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  // this.loadJSON("el_$HASH");
  // el.innerHTML = this.json["el_$HASH"].status;
}


bittyReady() {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  this.deleteJSON("el_$HASH");
  this.createJSON("el_$HASH", { status: "ok" });
  // delete this.json["el_$HASH"];
  // this.trigger("$SIGNAL_NAME");
}
