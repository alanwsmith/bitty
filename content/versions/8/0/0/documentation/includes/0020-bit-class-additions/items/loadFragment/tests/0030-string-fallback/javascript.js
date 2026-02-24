#key = "fragment_signal_38302";

signal_38302(_, el) {
  this.loadFragment(this.#key, `<div></div><div>ok</div>`);
  el.innerHTML = this.renderFragment(this.#key).children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_signal_38302");
}

given_signal_38302(_, __) {
  this.setLocalLogLevel("none");
  this.deleteFragment(this.#key);
  this.trigger("signal_38302");
}