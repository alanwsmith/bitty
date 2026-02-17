window.ClassE70E0 = class {
  bittyReady() {
    this.trigger("given_signal_E70E0");
  }

  given_signal_E70E0(_, __) {
    this.trigger("test_signal_E70E0");
  }

  test_signal_E70E0(_, el) {
    el.innerHTML = this.json["data_signal_E70E0"].status;
  }
};
