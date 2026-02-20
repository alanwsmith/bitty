window.Class69369 = class {
  #key = "fragment_signal_69369";

  test_signal_69369(element, el) {
    this.createFragment(this.#key, element);
    el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_69369");
  }

  given_signal_69369(_, __) {
    const element = document.createElement("div");
    element.innerHTML = "ok";
    this.send(element, "test_signal_69369");
  }
};
