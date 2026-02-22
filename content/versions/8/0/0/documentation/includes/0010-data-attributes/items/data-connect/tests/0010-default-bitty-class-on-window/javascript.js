ndow.BittyClass = class {
bittyReady() {
  this.trigger("signal_DA553");
}

signal_DA553(_, el) {
  el.innerHTML = "ok";
}