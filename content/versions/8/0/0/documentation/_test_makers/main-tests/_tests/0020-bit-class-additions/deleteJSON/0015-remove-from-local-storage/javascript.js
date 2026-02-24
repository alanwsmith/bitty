#key = "json_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  this.deleteJSON("el_$HASH");
  const result = this.loadJSON("el_$HASH");
  if (result.ok === false) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createJSON("el_$HASH", `{}`);
  this.trigger("$SIGNAL_NAME");
}