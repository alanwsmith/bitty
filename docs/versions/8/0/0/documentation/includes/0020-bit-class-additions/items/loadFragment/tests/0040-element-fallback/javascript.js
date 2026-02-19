window.Class5A3FB = class {
  #key = "fragment_signal_5A3FB";

  test_signal_5A3FB(newElement, el) {
    this.loadFragment(this.#key, newElement);
    el.innerHTML = this.fragment[this.#key].children[0].innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_5A3FB");
  }

  given_signal_5A3FB(_, __) {
    this.setLogLevel("none");
    this.removeFragment(this.#key);
    const newElement = document.createElement("div");
    newElement.innerHTML = "ok";
    this.send(newElement, "test_signal_5A3FB");
  }
};
