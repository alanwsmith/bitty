window.ClassE2600 = class {
  test_signal_E2600(_, el) {
    this.setLogLevel("not-a-valid-level");
    el.innerHTML = "ok";
  }
};
