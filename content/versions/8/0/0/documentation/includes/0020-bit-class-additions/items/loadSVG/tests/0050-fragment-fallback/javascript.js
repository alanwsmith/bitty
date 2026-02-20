window.ClassB95DA = class {
  #key = "fragment_signal_B95DA";

  test_signal_B95DA(fallbackFragment, el) {
    this.loadFragment(this.#key, fallbackFragment);
    el.innerHTML = this.renderFragment(this.#key).children[1].innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_B95DA");
  }

  given_signal_B95DA(_, __) {
    this.setLogLevel("none");
    this.removeFragment(this.#key);
    const fallbackFragment = document.createDocumentFragment();
    const fallbackElement1 = document.createElement("div");
    const fallbackElement2 = document.createElement("div");
    fallbackElement2.innerHTML = "ok";
    fallbackFragment.appendChild(fallbackElement1);
    fallbackFragment.appendChild(fallbackElement2);
    this.send(fallbackFragment, "test_signal_B95DA");
  }
};
