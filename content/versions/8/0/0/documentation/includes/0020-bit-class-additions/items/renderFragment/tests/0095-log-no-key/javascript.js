#key = "fragment_signal_88717";

test_signal_88717(_, el) {
//  this.logs = [];
  this.renderFragment(this.#key);
  // if (this.logs[0].ok === false && this.logs[0].level === "error") {
  //   el.innerHTML = "ok";
  // }
}



bittyReady() {
  this.trigger("given_signal_88717");
}

given_signal_88717(_, __) {
  this.setLocalLogLevel("none");
  this.deleteFragment(this.#key);
  this.trigger("test_signal_88717");
}
