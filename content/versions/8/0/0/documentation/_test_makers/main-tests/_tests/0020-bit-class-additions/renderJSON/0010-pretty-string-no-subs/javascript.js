window.$CLASS_NAME = class {
  #json = {
    "items": ["alfa", "bravo", "charlie"],
  };

  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.addJSON("data_$SIGNAL_NAME", this.#json);
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const expected = JSON.stringify(this.#json, null, 2);
    const got = this.renderJSON("data_$SIGNAL_NAME");
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
