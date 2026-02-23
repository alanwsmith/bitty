#key = "fragment_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  // const replacementEl = document.createElement("div");
  // replacementEl.innerHTML = "ok";
  // const subs = {
  //   "TARGET_$HASH": replacementEl,
  // };
  // const fragment = this.renderFragment(this.#key, subs);
  // el.innerHTML = fragment.firstChild.firstChild.innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment(this.#key, `<div>TARGET_$HASH</div>`);
  this.trigger("test_$SIGNAL_NAME");
}
