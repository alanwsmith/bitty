window.Class2B9C6 = class {
  bittyReady() {
    this.trigger("given_signal_2B9C6");
  }

  given_signal_2B9C6(_, __) {
    this.trigger("test_signal_2B9C6");
  }

  test_signal_2B9C6(_, el) {
    el.innerHTML = this.json["data_signal_2B9C6"].status;
  }
};
