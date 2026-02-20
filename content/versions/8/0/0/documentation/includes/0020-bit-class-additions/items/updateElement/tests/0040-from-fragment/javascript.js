window.Class66521 = class {
  #key = "fragment_signal_66521";

  test_signal_66521(fragment, el) {
    this.updateFragment(this.#key, fragment);
    //    el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_66521");
  }

  given_signal_66521(_, __) {
    const fragment = document.createDocumentFragment();
    const element = document.createElement("div");
    element.innerHTML = "ok";
    fragment.appendChild(element);
    this.send(fragment, "test_signal_66521");
  }
};
