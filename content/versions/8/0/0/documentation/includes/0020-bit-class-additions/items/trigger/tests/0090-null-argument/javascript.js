bittyReady() {
  this.trigger("signal_88E0C");
}

signal_88E0C(ev, el) {
  if (ev === null) {
    el.innerHTML = "ok";
  }
}