#key = "fragment_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  this.loadFragment(this.#key);
  el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment(this.#key, "<div>ok</div>");
  delete this._fragment[this.#key];
  this.trigger("$SIGNAL_NAME");
}