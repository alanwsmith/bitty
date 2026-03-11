signal_5B020(_, el) {
  this.setLocalLogLevel("warn");
  this.warn("This is a warn level log from 5B020");
  el.innerHTML = "Check the console for a warning from 5B020";
}
