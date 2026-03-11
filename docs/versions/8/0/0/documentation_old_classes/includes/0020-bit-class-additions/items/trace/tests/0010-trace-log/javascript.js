signal_F8B10(_, el) {
  this.setLocalLogLevel("trace");
  this.trace("This is a trace level log from F8B10");
  el.innerHTML = "Check the console for a trace from F8B10";
}
