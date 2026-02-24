#key = "fragment_$SIGNAL_NAME";

$SIGNAL_NAME(element, el) {
  const result = this.loadFragment(this.#key);
  el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.deleteFragment(this.#key);
  this.updateFragment(this.#key, `<div>ok</div>`);
  delete this._fragment[this.#key];
  this.trigger("$SIGNAL_NAME");
}