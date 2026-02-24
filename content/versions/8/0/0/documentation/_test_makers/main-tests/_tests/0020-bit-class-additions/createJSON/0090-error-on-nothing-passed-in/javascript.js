#key = "json_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const result = this.createJSON("el_$HASH");
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("$SIGNAL_NAME");
}