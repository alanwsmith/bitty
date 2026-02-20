window.ClassD35C5 = class {
  bittyReady() {
    this.trigger("given_signal_D35C5");
  }

  given_signal_D35C5(_, __) {
    this.trigger("test_signal_D35C5");
  }

  test_signal_D35C5(_, el) {
    const jsObject = { method_D35C5: () => {} };
    this.addJSON("data_signal_D35C5", jsObject);
    const verify = JSON.parse(localStorage.getItem("data_signal_D35C5")).data;
    if (verify.method_D35C5 === undefined) {
      el.innerHTML = "ok";
    }
  }
};
