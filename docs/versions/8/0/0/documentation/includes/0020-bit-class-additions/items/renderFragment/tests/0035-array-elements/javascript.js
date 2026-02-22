#key = "fragment_signal_A86C1";

test_signal_A86C1(_, el) {
  const replacementEl = document.createElement("div");
  replacementEl.innerHTML = "ok";
  const replacementEl2 = document.createElement("div");
  replacementEl2.innerHTML = "ok";
  const replacementArray = [
    replacementEl,
    replacementEl2,
  ];
  const subs = {
    "TARGET_A86C1": replacementArray,
  };
  const fragment = this.renderFragment(this.#key, subs);
  el.innerHTML = fragment.firstChild.children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_signal_A86C1");
}

given_signal_A86C1(_, __) {
  this.setLogLevel("none");
  this.createFragment(this.#key, `<div>TARGET_A86C1</div>`);
  this.trigger("test_signal_A86C1");
}