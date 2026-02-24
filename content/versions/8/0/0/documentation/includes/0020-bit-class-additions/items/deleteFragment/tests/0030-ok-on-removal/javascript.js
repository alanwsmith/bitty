

signal_53DF8(_, el) {
  const result = this.deleteFragment("el_53DF8");
  if (result.ok === true) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_signal_53DF8");
}

given_signal_53DF8(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment("el_53DF8", "<div></div>");
  this.trigger("signal_53DF8");
}