$SIGNAL_NAME(_, el) {
  if (el.getDataAsFloat("needle") === 8.2) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}