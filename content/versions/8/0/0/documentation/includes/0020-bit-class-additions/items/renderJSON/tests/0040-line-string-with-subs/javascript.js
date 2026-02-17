window.ClassCC336 = class {
  bittyReady() {
    this.trigger("given_signal_CC336");
  }

  given_signal_CC336(_, __) {
    const givenJSON = {
      items: ["TARGET_CC336", "TARGET_CC336"],
    };
    this.addJSON("data_signal_CC336", givenJSON);
    this.trigger("test_signal_CC336");
  }

  test_signal_CC336(_, el) {
    const expected = JSON.stringify({
      items: ["UPDATED_CC336", "UPDATED_CC336"],
    });
    const subs = {
      "TARGET_CC336": "UPDATED_CC336",
    };
    const got = this.renderJSON("data_signal_CC336", subs, false);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
