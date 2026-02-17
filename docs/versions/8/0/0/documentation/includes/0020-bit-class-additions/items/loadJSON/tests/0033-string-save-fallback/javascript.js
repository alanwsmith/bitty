window.ClassE6EB8 = class {
  bittyReady() {
    this.trigger("given_signal_E6EB8");
  }

  given_signal_E6EB8(_, __) {
    const fallback = `{ "status": "ok" }`;
    const result = this.loadJSON("data_signal_E6EB8", fallback);
    this.trigger("test_signal_E6EB8");
  }

  test_signal_E6EB8(_, el) {
    const storage = localStorage.getItem("data_signal_E6EB8");
    el.innerHTML = JSON.parse(storage).data.status;
  }
};
