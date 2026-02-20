window.Class57CC1 = class {
  bittyReady() {
    this.trigger("given_signal_57CC1");
  }

  given_signal_57CC1(_, __) {
    this.createJSON("data_signal_57CC1", `{}`);
    this.trigger("test_signal_57CC1");
  }

  test_signal_57CC1(_, el) {
    this.deleteJSON("data_signal_57CC1");
    const checkStorage = localStorage.getItem("data_signal_57CC1");
    if (checkStorage === null) {
      el.innerHTML = "ok";
    }
  }
};
