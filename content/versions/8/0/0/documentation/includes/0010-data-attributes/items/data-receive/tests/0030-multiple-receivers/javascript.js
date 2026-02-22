bittyReady() {
  this.trigger(`signal_327E5`);
}

signal_327E5(_, el) {
  el.innerHTML = "ok";
}