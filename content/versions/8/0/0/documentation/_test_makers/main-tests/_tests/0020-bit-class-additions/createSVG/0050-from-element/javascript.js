window.$CLASS_NAME = class {
  #key = "fragment_$SIGNAL_NAME";

  test_$SIGNAL_NAME(element, el) {
    this.createFragment(this.#key, element);
    //    el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    const element = document.createElement("div");
    element.innerHTML = "ok";
    this.send(element, "test_$SIGNAL_NAME");
  }
};
