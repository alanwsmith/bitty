#key = "json_signal_0E048";

test_signal_0E048(_, el) {
  const result = this.saveJSON("no-key-with-this-name");
  if (result.ok === false) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.trigger("test_signal_0E048");
}
