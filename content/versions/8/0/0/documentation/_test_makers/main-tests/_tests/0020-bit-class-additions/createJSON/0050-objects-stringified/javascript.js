window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const jsObject = { method_$HASH: () => {} };
    this.addJSON("data_$SIGNAL_NAME", jsObject);
    const verify = JSON.parse(localStorage.getItem("data_$SIGNAL_NAME")).data;
    if (verify.method_$HASH === undefined) {
      //      el.innerHTML = "ok";
    }
  }
};
