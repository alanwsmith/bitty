#key = "fragment_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const fragment = this.renderFragment(this.#key);
//  el.innerHTML = fragment.children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLogLevel("none");
  this.createFragment(this.#key, `<div></div><div>ok</div>`);
  this.trigger("test_$SIGNAL_NAME");
}
