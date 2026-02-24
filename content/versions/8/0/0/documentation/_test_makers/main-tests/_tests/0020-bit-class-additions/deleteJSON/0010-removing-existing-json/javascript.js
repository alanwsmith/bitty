#key = "json_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  this.deleteJSON("el_$HASH");
  if (this.json["el_$HASH"] === undefined) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createJSON("el_$HASH", `{}`);
  this.trigger("$SIGNAL_NAME");
}