window.$CLASS_NAME = class {
  #key = "fragment_$SIGNAL_NAME";

  test_$SIGNAL_NAME(fragment, el) {
    this.createFragment(this.#key, fragment);
    //    el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    const fragment = document.createDocumentFragment();
    const element = document.createElement("div");
    element.innerHTML = "ok";
    fragment.appendChild(element);
    this.send(fragment, "test_$SIGNAL_NAME");
  }
};
