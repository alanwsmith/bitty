$SIGNAL_NAME(_, el) {
  this.setGlobalLogLevel("trace");
  el.innerHTML = this.getGlobalLogLevel();
}
