window.ClassE47B8 = class {
  #key = "fragment_signal_E47B8";

  async test_signal_E47B8(url, el) {
    await this.fetchFragment(this.#key, url);
    el.innerHTML = this.renderFragment(this.#key).children[1].innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_E47B8");
  }

  given_signal_E47B8(_, __) {
    const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
    this.send(url, "test_signal_E47B8");
  }
};
