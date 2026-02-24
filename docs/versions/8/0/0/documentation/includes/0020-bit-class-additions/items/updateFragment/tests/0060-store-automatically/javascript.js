#key = "fragment_signal_3BC5E";

signal_3BC5E(element, el) {
  const result = this.loadFragment(this.#key);
  el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
}


bittyReady() {
  this.trigger("given_signal_3BC5E");
}

given_signal_3BC5E(_, __) {
  this.deleteFragment(this.#key);
  this.updateFragment(this.#key, `<div>ok</div>`);
  delete this._fragment[this.#key];
  this.trigger("signal_3BC5E");
}