test_$SIGNAL_NAME(_, el) {
  el.innerHTML = el.getData("needle");
}


bittyReady() {
  this.trigger("test_$SIGNAL_NAME");
}