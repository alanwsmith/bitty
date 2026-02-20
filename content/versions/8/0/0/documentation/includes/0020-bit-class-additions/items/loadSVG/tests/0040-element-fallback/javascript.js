window.ClassE4FA2 = class {
  #key = "fragment_signal_E4FA2";

  test_signal_E4FA2(newElement, el) {
    this.loadFragment(this.#key, newElement);
    el.innerHTML = this.renderFragment(this.#key).children[0].innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_E4FA2");
  }

  given_signal_E4FA2(_, __) {
    this.setLogLevel("none");
    this.removeFragment(this.#key);
    const newElement = document.createElement("div");
    newElement.innerHTML = "ok";
    this.send(newElement, "test_signal_E4FA2");
  }
};
