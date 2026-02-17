window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const jsonString = `{}`;
    const result = this.addJSON("data_$SIGNAL_NAME", jsonString);
    if (result.ok === true) {
      el.innerHTML = "ok";
    }
  }
};
