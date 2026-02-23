#key = "fragment_signal_31065";

test_signal_31065(_, el) {
  // const replacementEl = document.createElement("div");
  // replacementEl.innerHTML = "ok";
  // const subs = {
  //   "TARGET_31065": replacementEl,
  // };
  // const fragment = this.renderFragment(this.#key, subs);
  // el.innerHTML = fragment.firstChild.firstChild.innerHTML;
}


bittyReady() {
  this.trigger("given_signal_31065");
}

given_signal_31065(_, __) {
  this.setLogLevel("none");
  this.createFragment(this.#key, `<div>TARGET_31065</div>`);
  this.trigger("test_signal_31065");
}
