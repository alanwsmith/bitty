window.ClassBA6A6 = class {
  #key = "fragment_signal_BA6A6";

  test_signal_BA6A6(fragment, el) {
    this.createFragment(this.#key, fragment);
    //    el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_BA6A6");
  }

  given_signal_BA6A6(_, __) {
    const fragment = document.createDocumentFragment();
    const element = document.createElement("div");
    element.innerHTML = "ok";
    fragment.appendChild(element);
    this.send(fragment, "test_signal_BA6A6");
  }
};
