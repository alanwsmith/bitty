#key = "el_$SIGNAL_NAME";

bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.trigger("$SIGNAL_NAME");
}

$SIGNAL_NAME(_, el) {
  this.logs = [];
  if (
    this.renderElement("el_$HASH") === undefined &&
    this.logs[0].level === "error"
  ) {
    el.innerHTML = "ok";
  }
}