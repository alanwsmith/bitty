window.Class6F792 = class {
  #key = "fragment_signal_6F792";

  async test_signal_6F792(url, el) {
    const options = {
      fetchOptions: {
        headers: {
          "x-bitty-test": "key_signal_6F792",
        },
      },
    };
    await this.fetchFragment(this.#key, url, options);
    el.innerHTML = this.renderFragment(this.#key).children[1].innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_6F792");
  }

  given_signal_6F792(_, __) {
    const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
    this.send(url, "test_signal_6F792");
  }
};
