window.$CLASS_NAME = class {
  #key = "fragment_$SIGNAL_NAME";

  test_$SIGNAL_NAME(fallbackFragment, el) {
    this.loadFragment(this.#key);
    //    el.innerHTML = this.fragment[this.#key].firstChild.innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.setLogLevel("none");
    this.removeFragment(this.#key);
    this.loadFragment(this.#key, "<div>ok</div>");
    delete this.fragment[this.#key];
    this.trigger("test_$SIGNAL_NAME");
  }
};
