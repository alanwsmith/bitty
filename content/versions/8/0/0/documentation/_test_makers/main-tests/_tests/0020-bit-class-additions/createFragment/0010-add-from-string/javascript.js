#key = "fragment_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  this.createFragment(this.#key, `<div>x</div><div>ok</div>`);
  el.innerHTML = this.renderFragment(this.#key).children[1].innerHTML;
}


bittyReady() {
  this.trigger("test_$SIGNAL_NAME");
}