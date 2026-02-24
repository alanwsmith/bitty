

signal_88717(_, el) {
//  this.logs = [];
  this.renderFragment("el_88717");
  // if (this.logs[0].ok === false && this.logs[0].level === "error") {
  //   el.innerHTML = "ok";
  // }
}



bittyReady() {
  this.trigger("given_signal_88717");
}

given_signal_88717(_, __) {
  this.setLocalLogLevel("none");
  this.deleteFragment("el_88717");
  this.trigger("signal_88717");
}
