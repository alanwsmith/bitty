#key = "fragment_signal_5D60F";

signal_5D60F(_, el) {
  this.loadFragment(this.#key);
  el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
}


bittyReady() {
  this.trigger("given_signal_5D60F");
}

given_signal_5D60F(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment(this.#key, "<div>ok</div>");
  delete this._fragment[this.#key];
  this.trigger("signal_5D60F");
}