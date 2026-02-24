#key = "json_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const result = this.deleteJSON("el_$HASH");
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("$SIGNAL_NAME");
}