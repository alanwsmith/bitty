#key = "json_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const result = this.saveJSON("no-key-with-this-name");
  if (result.ok === false) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.trigger("test_$SIGNAL_NAME");
}
