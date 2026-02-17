window.ClassB5BDE = class {
  bittyReady() {
    this.trigger("given_signal_B5BDE");
  }

  given_signal_B5BDE(_, __) {
    const fallback = `{ "status": "ok" }`;
    const result = this.loadJSON("data_signal_B5BDE", fallback);
    this.trigger("test_signal_B5BDE");
  }

  test_signal_B5BDE(_, el) {
    const storage = localStorage.getItem("data_signal_B5BDE");
    el.innerHTML = JSON.parse(storage).data.status;
  }
};
