

$SIGNAL_NAME(_, el) {
//  this.logs = [];
  this.renderFragment("el_$HASH");
  // if (this.logs[0].ok === false && this.logs[0].level === "error") {
  //   el.innerHTML = "test passed";
  // }
}



bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.deleteFragment("el_$HASH");
  this.trigger("$SIGNAL_NAME");
}
