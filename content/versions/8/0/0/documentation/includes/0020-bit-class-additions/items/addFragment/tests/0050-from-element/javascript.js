window.Class140A5 = class {
  #key = "fragment_signal_140A5";

  test_signal_140A5(element, el) {
    this.addFragment(this.#key, element);
    el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_140A5");
  }

  given_signal_140A5(_, __) {
    const element = document.createElement("div");
    element.innerHTML = "ok";
    this.send(element, "test_signal_140A5");
  }
};
