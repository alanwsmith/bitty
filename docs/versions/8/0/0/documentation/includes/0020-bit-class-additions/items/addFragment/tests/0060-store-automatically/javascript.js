window.Class46488 = class {
  #key = "fragment_signal_46488";

  test_signal_46488(element, el) {
    // Finish this test when loadFragment is ready.
    el.classList.remove("test");
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_46488");
  }

  given_signal_46488(_, __) {
    const element = document.createElement("div");
    element.innerHTML = "ok";
    this.addFragment(this.#key, element);
    this.send(element, "test_signal_46488");
  }
};
