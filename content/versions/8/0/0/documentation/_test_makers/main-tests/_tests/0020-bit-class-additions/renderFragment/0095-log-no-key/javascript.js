#key = "fragment_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
//  this.logs = [];
  this.renderFragment(this.#key);
  // if (this.logs[0].ok === false && this.logs[0].level === "error") {
  //   el.innerHTML = "ok";
  // }
}



bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.deleteFragment(this.#key);
  this.trigger("$SIGNAL_NAME");
}
