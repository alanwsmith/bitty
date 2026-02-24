#key = "fragment_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  this.updateFragment(this.#key, `<div>x</div><div>ok</div>`);
  el.innerHTML = this.renderFragment(this.#key).children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.trigger("$SIGNAL_NAME");
}