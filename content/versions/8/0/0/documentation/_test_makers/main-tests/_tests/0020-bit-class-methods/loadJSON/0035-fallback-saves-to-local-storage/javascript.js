window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    const fallback = JSON.parse(`{ "status": "ok" }`);
    const result = this.loadJSON("data_$SIGNAL_NAME", fallback);
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const data = localStorage.getItem("data_$SIGNAL_NAME");
    el.innerHTML = data;
  }
};
