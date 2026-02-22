test_signal_66809(_, el) {
  el.innerHTML = el.getData("needle");
}


bittyReady() {
  this.trigger("test_signal_66809");
}