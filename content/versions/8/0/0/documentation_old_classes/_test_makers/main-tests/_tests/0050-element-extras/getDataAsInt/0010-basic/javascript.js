$SIGNAL_NAME(_, el) {
  if (el.loadDataAsInt("needle") === 3030) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}