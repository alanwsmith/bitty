window.Class97B22 = class {
  bittyReady() {
    this.trigger("given_signal_97B22");
  }

  given_signal_97B22(_, __) {
    const givenJSON = {
      items: ["TARGET_97B22", "TARGET_97B22"],
    };
    this.addJSON("data_signal_97B22", givenJSON);
    this.trigger("test_signal_97B22");
  }

  test_signal_97B22(_, el) {
    const expected = JSON.stringify(
      {
        items: ["UPDATED_97B22", "UPDATED_97B22"],
      },
      null,
      2,
    );
    const subs = {
      "TARGET_97B22": "UPDATED_97B22",
    };
    const got = this.renderJSON("data_signal_97B22", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
