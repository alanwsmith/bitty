#key = "fragment_signal_2C4FE";

test_signal_2C4FE(_, el) {
  this.createFragment(this.#key, `<div>x</div><div>ok</div>`);
  el.innerHTML = this.renderFragment(this.#key).children[1].innerHTML;
}


bittyReady() {
  this.trigger("test_signal_2C4FE");
}