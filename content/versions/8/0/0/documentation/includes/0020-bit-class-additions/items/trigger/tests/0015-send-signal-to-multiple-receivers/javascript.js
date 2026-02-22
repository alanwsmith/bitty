bittyReady() {
  this.trigger("signal_BD30E");
}

signal_BD30E(_, el) {
  el.innerHTML = "ok";
}