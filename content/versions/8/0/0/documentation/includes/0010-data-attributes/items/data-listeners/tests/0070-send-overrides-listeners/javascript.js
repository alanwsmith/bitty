bittyReady() {
  this.send({}, "signal_65CC7");
}

signal_65CC7(_, el) {
  el.innerHTML = "ok";
}