bittyReady() {
  this.trigger("signal_5EF10");
}

signal_5EF10(_, el) {
  el.innerHTML = "ok";
}