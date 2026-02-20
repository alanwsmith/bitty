window.Class09A88 = class {
  bittyReady() {
    this.trigger("given_signal_09A88");
  }

  given_signal_09A88(_, __) {
    this.trigger("test_signal_09A88");
  }

  test_signal_09A88(_, el) {
    const jsObject = { method_09A88: () => {} };
    this.addJSON("data_signal_09A88", jsObject);
    const verify = JSON.parse(localStorage.getItem("data_signal_09A88")).data;
    if (verify.method_09A88 === undefined) {
      //      el.innerHTML = "ok";
    }
  }
};
