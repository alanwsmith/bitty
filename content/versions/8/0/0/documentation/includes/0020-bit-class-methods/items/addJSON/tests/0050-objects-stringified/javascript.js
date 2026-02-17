window.ClassA3FD7 = class {
  bittyReady() {
    this.trigger("given_signal_A3FD7");
  }

  given_signal_A3FD7(_, __) {
    this.trigger("test_signal_A3FD7");
  }

  test_signal_A3FD7(_, el) {
    const jsObject = { method_A3FD7: () => {} };
    this.addJSON("data_signal_A3FD7", jsObject);
    const verify = JSON.parse(localStorage.getItem("data_signal_A3FD7")).data;
    if (verify.method_A3FD7 === undefined) {
      el.innerHTML = "ok";
    }
  }
};
