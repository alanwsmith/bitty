bittyReady() {
  this.trigger("signal_90DD9");
}

signal_90DD9(_, el) {
  el.innerHTML = "ok";
}