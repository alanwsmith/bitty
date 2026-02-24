#key = "fragment_signal_108CD";

signal_108CD(_, el) {
  this.deleteFragment(this.#key);
  if (this._fragment[this.#key] === undefined) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_signal_108CD");
}

given_signal_108CD(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment(this.#key, "<div></div>");
  this.trigger("signal_108CD");
}