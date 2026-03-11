bittyReady() {
  this.trigger("signal_C7BB1");
}

signal_C7BB1(_, el) {
  el.innerHTML = "test passed";
}