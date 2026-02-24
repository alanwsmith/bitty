

$SIGNAL_NAME(_, el) {
  this.deleteFragment("el_$HASH");
  if (this._fragment["el_$HASH"] === undefined) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment("el_$HASH", "<div></div>");
  this.trigger("$SIGNAL_NAME");
}