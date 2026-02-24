#key = "fragment_signal_E5126";

signal_E5126(fragment, el) {
  this.updateFragment(this.#key, fragment);
  el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
}


bittyReady() {
  this.trigger("given_signal_E5126");
}

given_signal_E5126(_, __) {
  const fragment = document.createDocumentFragment();
  const element = document.createElement("div");
  element.innerHTML = "ok";
  fragment.appendChild(element);
  this.send(fragment, "signal_E5126");
}