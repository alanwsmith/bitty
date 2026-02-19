window.$CLASS_NAME = class {
  #key = "fragment_$SIGNAL_NAME";

  test_$SIGNAL_NAME(element, el) {
    // Finish this test when loadFragment is ready.
    el.classList.remove("test");
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
    this.addFragment(this.#key, element);
    this.send(element, "test_$SIGNAL_NAME");
  }
};
