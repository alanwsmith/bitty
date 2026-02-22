#key = "fragment_signal_B50E1";

test_signal_B50E1(element, el) {
  this.updateFragment(this.#key, element);
  el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
}


bittyReady() {
  this.trigger("given_signal_B50E1");
}

given_signal_B50E1(_, __) {
  const element = document.createElement("div");
  element.innerHTML = "ok";
  this.send(element, "test_signal_B50E1");
}