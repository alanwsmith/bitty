window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.createJSON("data_$SIGNAL_NAME", `{}`);
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    this.deleteJSON("data_$SIGNAL_NAME");
    const checkStorage = localStorage.getItem("data_$SIGNAL_NAME");
    if (checkStorage === null) {
      el.innerHTML = "ok";
    }
  }
};
