#key = "json_signal_45CAA";

signal_45CAA(_, el) {
  const result = this.createJSON("el_45CAA");
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("signal_45CAA");
}