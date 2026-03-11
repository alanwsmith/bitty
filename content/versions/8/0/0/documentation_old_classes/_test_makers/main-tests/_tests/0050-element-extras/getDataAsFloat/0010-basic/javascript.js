$SIGNAL_NAME(_, el) {
  if (el.loadDataAsFloat("needle") === 8.2) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}