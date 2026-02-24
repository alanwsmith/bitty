

signal_7EF03(_, el) {
  const result = this.loadFragment("el_7EF03");
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_signal_7EF03");
}

given_signal_7EF03(_, __) {
  this.setLocalLogLevel("none");
  this.deleteFragment("el_7EF03");
  this.trigger("signal_7EF03");
}