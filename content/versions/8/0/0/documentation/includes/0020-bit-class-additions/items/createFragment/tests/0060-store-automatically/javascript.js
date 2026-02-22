#key = "fragment_signal_C87DB";

test_signal_C87DB(element, el) {
  const result = this.loadFragment(this.#key);
  el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
}


bittyReady() {
  this.trigger("given_signal_C87DB");
}

given_signal_C87DB(_, __) {
  this.deleteFragment(this.#key);
  this.createFragment(this.#key, `<div>ok</div>`);
  delete this._fragment[this.#key];
  this.trigger("test_signal_C87DB");
}