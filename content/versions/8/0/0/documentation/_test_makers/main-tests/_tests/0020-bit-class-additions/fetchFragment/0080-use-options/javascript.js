window.$CLASS_NAME = class {
  #key = "fragment_$SIGNAL_NAME";

  async test_$SIGNAL_NAME(url, el) {
    const options = {
      fetchOptions: {
        headers: {
          "x-bitty-test": "key_$SIGNAL_NAME",
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
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
    this.send(url, "test_$SIGNAL_NAME");
  }
};
