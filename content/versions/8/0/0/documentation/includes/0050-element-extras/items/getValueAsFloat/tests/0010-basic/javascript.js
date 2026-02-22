bittyReady() {
  document
    .querySelector("[data-receive=signal_C502D]")
    .value = "47.28";
  this.trigger("signal_C502D");
}

signal_C502D(_, el) {
  if (el.getValueAsFloat() === 47.28) {
    this.trigger("verify_signal_C502D");
  }
}

verify_signal_C502D(_, el) {
  el.innerHTML = "ok";
}