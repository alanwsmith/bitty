bittyReady() {
  document
    .querySelector("[data-receive=signal_05EDE]")
    .value = 9000;
  this.trigger("signal_05EDE");
}

signal_05EDE(_, el) {
  if (el.getValueAsInt() === 9000) {
    this.trigger("verify_signal_05EDE");
  }
}

verify_signal_05EDE(_, el) {
  el.innerHTML = "test passed";
}