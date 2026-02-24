#key = "json_signal_AF25A";

signal_AF25A(_, el) {
  const result = this.deleteJSON("el_AF25A");
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("signal_AF25A");
}