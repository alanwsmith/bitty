signal_A3401(_, el) {
  this.setLocalLogLevel("warn");
  this.warn("This is a 'info' level log from A3401");
  el.innerHTML = "Check the console for an info log from A3401";
}
