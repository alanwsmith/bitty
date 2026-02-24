$SIGNAL_NAME(_, el) {
  el.innerHTML = el.getData("needle");
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}