

signal_F8382(_, el) {
  const result = this.loadFragment("el_F8382");
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.trigger("given_signal_F8382");
}

given_signal_F8382(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment("el_F8382", `<div></div>`);
  this.trigger("signal_F8382");
}