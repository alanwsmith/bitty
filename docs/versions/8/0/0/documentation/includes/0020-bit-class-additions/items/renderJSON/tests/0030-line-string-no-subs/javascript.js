window.ClassBD37F = class {
  bittyReady() {
    this.trigger("given_signal_BD37F");
  }

  given_signal_BD37F(_, __) {
    const givenJSON = {
      items: ["TARGET_BD37F", "TARGET_BD37F"],
    };
    this.addJSON("data_signal_BD37F", givenJSON);
    this.trigger("test_signal_BD37F");
  }

  test_signal_BD37F(_, el) {
    const expected = JSON.stringify({
      items: ["TARGET_BD37F", "TARGET_BD37F"],
    });
    const got = this.renderJSON("data_signal_BD37F", null, false);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
