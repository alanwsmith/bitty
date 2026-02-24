#key = "json_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  // const jsObject = { "status": "test passed" };
  // this.createJSON("el_$HASH", jsObject);
  // el.innerHTML = this.json["el_$HASH"].status;
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}
