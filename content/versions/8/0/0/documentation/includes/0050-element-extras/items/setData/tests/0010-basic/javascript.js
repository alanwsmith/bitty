window.ClassCE33E = class {
  test_signal_CE33E(_, el) {
    el.setData("updated", "ok");
    this.trigger("verify_signal_CE33E");
  }

  verify_signal_CE33E(_, el) {
    el.innerHTML = el.getData("updated");
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_CE33E");
  }
};
