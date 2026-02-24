

signal_108CD(_, el) {
  this.deleteFragment("el_108CD");
  if (this._fragment["el_108CD"] === undefined) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.trigger("given_signal_108CD");
}

given_signal_108CD(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment("el_108CD", "<div></div>");
  this.trigger("signal_108CD");
}