#key = "fragment_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  this.loadFragment(this.#key, `<div></div><div>ok</div>`);
  el.innerHTML = this.renderFragment(this.#key).children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLogLevel("none");
  this.deleteFragment(this.#key);
  this.trigger("test_$SIGNAL_NAME");
}