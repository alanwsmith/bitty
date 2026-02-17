window.$CLASS_NAME = class {
  test_$SIGNAL_NAME(_, el) {
    this.setLogLevel("not-a-valid-level");
    el.innerHTML = "ok";
  }
};
