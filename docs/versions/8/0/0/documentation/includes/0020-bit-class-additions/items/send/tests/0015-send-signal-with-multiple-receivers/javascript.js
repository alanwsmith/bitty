bittyReady() {
  this.send({ status: "ok" }, "signal_138D4");
}

signal_138D4(payload, el) {
  el.innerHTML = payload.status;
}