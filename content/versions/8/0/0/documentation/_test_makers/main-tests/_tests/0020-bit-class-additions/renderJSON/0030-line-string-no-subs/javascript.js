window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    const givenJSON = {
      items: ["TARGET_$HASH", "TARGET_$HASH"],
    };
    this.addJSON("data_$SIGNAL_NAME", givenJSON);
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const expected = JSON.stringify({
      items: ["TARGET_$HASH", "TARGET_$HASH"],
    });
    const got = this.renderJSON("data_$SIGNAL_NAME", null, false);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
