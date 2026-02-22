#key = "fragment_signal_A0EAB";

test_signal_A0EAB(fragment, el) {
  this.createFragment(this.#key, fragment);
  el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
}


bittyReady() {
  this.trigger("given_signal_A0EAB");
}

given_signal_A0EAB(_, __) {
  const fragment = document.createDocumentFragment();
  const element = document.createElement("div");
  element.innerHTML = "ok";
  fragment.appendChild(element);
  this.send(fragment, "test_signal_A0EAB");
}