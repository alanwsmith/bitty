window.Class586F5 = class {
  bittyReady() {
    this.trigger("given_signal_586F5");
  }

  given_signal_586F5(_, __) {
    const fallback = `{ "status": "ok" }`;
    const result = this.loadJSON("data_signal_586F5", fallback);
    this.trigger("test_signal_586F5");
  }

  test_signal_586F5(_, el) {
    const storage = localStorage.getItem("data_signal_586F5");
    el.innerHTML = JSON.parse(storage).data.status;
  }
};
