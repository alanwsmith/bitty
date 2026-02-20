window.ClassF264E = class {
  bittyReady() {
    this.trigger("given_signal_F264E");
  }

  given_signal_F264E(_, __) {
    this.trigger("test_signal_F264E");
  }

  test_signal_F264E(_, el) {
    const jsonString = `{}`;
    const result = this.createJSON("data_signal_F264E", jsonString);
    if (result.ok === true) {
      //el.innerHTML = "ok";
    }
  }
};
