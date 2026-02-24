

$SIGNAL_NAME(_, el) {
  this.deleteFragment("el_$HASH");
  const result = this.loadFragment("el_$HASH");
  if (result.ok === false) {
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