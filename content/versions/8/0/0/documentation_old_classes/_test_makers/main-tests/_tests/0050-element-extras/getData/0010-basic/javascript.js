$SIGNAL_NAME(_, el) {
  el.innerHTML = el.loadData("needle");
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}