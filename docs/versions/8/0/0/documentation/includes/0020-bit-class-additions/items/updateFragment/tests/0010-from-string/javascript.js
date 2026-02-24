

signal_5A45F(_, el) {
  this.updateFragment(this.#key, `<div>x</div><div>ok</div>`);
  el.innerHTML = this.renderFragment(this.#key).children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_signal_5A45F");
}

given_signal_5A45F(_, __) {
  this.trigger("signal_5A45F");
}