$SIGNAL_NAME(_, el) {
  this.setLocalLogLevel("warn");
  this.warn("This is a warn level log from $HASH");
  el.innerHTML = "Check the console for a warning from $HASH";
}
