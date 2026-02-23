#key = "fragment_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  // const subs = {
  //   "TARGET_$HASH": ["o", "k"],
  // };
  // const fragment = this.renderFragment(this.#key, subs);
  // el.innerHTML = fragment.children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLogLevel("none");
  this.createFragment(this.#key, `<div></div><div>TARGET_$HASH</div>`);
  this.trigger("test_$SIGNAL_NAME");
}
