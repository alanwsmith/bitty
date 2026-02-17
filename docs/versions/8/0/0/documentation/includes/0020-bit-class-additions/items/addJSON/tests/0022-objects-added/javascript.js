window.Class51037 = class {
  bittyReady() {
    this.trigger("given_signal_51037");
  }

  given_signal_51037(_, __) {
    this.trigger("test_signal_51037");
  }

  test_signal_51037(_, el) {
    const jsObject = { status: "ok" };
    this.addJSON("data_signal_51037", jsObject);
    el.innerHTML = this.json["data_signal_51037"].status;
  }
};
