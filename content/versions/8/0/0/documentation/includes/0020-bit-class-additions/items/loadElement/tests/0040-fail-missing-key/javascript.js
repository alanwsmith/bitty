#key = "el_signal_94D78";

bittyReady() {
  this.trigger("given_signal_94D78");
}

given_signal_94D78(_, __) {
  this.setLocalLogLevel("none");
  this.deleteElement("el_signal_94D78");
  this.trigger("signal_94D78");
}

signal_94D78(_, el) {
  const result = this.loadElement("el_signal_94D78");
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}