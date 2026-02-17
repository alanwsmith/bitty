window.ClassBC3AE = class {
  #json = {
    "items": ["alfa", "bravo", "charlie"],
  };

  bittyReady() {
    this.trigger("given_signal_BC3AE");
  }

  given_signal_BC3AE(_, __) {
    this.addJSON("data_signal_BC3AE", this.#json);
    this.trigger("test_signal_BC3AE");
  }

  test_signal_BC3AE(_, el) {
    const expected = JSON.stringify(this.#json, null, 2);
    const got = this.renderJSON("data_signal_BC3AE");
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
