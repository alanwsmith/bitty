$SIGNAL_NAME(_, el) {
  this.setLocalLogLevel("trace");
  this.trace("This is a trace level log from $HASH");
  el.innerHTML = "Check the console for a trace from $HASH";
}
