window.ClassCB343 = class {
  bittyReady() {
    this.trigger("given_signal_CB343");
  }

  given_signal_CB343(_, __) {
    this.trigger("test_signal_CB343");
  }

  test_signal_CB343(_, el) {
    el.innerHTML = this.json["data_signal_CB343"].status;
  }
};
