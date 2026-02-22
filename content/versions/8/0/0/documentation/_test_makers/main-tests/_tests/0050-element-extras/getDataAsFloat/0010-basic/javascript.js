test_$SIGNAL_NAME(_, el) {
  if (el.getDataAsFloat("needle") === 8.2) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("test_$SIGNAL_NAME");
}