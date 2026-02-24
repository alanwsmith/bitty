#key = "json_signal_CE7A8";

signal_CE7A8(_, el) {
  this.deleteJSON("el_CE7A8");
  const result = this.loadJSON("el_CE7A8");
  if (result.ok === false) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createJSON("el_CE7A8", `{}`);
  this.trigger("signal_CE7A8");
}