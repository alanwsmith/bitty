$SIGNAL_NAME(_, el) {
  this.setLocalLogLevel("warn");
  this.warn("This is a 'info' level log from $HASH");
  el.innerHTML = "Check the console for an info log from $HASH";
}
