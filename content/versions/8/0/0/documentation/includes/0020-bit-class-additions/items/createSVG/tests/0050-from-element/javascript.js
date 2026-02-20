window.ClassEE359 = class {
  #key = "fragment_signal_EE359";

  test_signal_EE359(element, el) {
    this.createFragment(this.#key, element);
    //    el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_EE359");
  }

  given_signal_EE359(_, __) {
    const element = document.createElement("div");
    element.innerHTML = "ok";
    this.send(element, "test_signal_EE359");
  }
};
