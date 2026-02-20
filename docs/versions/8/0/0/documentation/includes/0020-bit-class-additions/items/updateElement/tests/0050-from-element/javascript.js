window.Class45896 = class {
  #key = "fragment_signal_45896";

  test_signal_45896(element, el) {
    this.updateFragment(this.#key, element);
    //    el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_45896");
  }

  given_signal_45896(_, __) {
    const element = document.createElement("div");
    element.innerHTML = "ok";
    this.send(element, "test_signal_45896");
  }
};
