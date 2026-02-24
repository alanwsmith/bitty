#key = "el_$SIGNAL_NAME";

bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.deleteElement("el_$SIGNAL_NAME");
  this.trigger("$SIGNAL_NAME");
}

$SIGNAL_NAME(_, el) {
  const result = this.loadElement("el_$SIGNAL_NAME");
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}