#key = "fragment_signal_FC310";

test_signal_FC310(_, el) {
  const fragment = this.renderFragment(this.#key);
//  el.innerHTML = fragment.children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_signal_FC310");
}

given_signal_FC310(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment(this.#key, `<div></div><div>ok</div>`);
  this.trigger("test_signal_FC310");
}
