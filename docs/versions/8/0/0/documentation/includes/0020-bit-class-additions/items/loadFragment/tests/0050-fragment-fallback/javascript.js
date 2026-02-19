window.Class119D0 = class {
  #key = "el_signal_119D0";

  test_signal_119D0(fallbackFragment, el) {
    this.loadFragment(this.#key, fallbackFragment);
    el.innerHTML = this.fragment[this.#key].children[1].innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_119D0");
  }

  given_signal_119D0(_, __) {
    this.setLogLevel("none");
    this.removeFragment(this.#key);
    const fallbackFragment = document.createDocumentFragment();
    const fallbackElement1 = document.createElement("div");
    const fallbackElement2 = document.createElement("div");
    fallbackElement2.innerHTML = "ok";
    fallbackFragment.appendChild(fallbackElement1);
    fallbackFragment.appendChild(fallbackElement2);
    this.send(fallbackFragment, "test_signal_119D0");
  }
};
