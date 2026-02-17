window.Class5A06D = class {
  bittyReady() {
    this.trigger("given_signal_5A06D");
  }

  given_signal_5A06D(_, __) {
    const fallback = JSON.parse(`{ "status": "ok" }`);
    const result = this.loadJSON("data_signal_5A06D", fallback);
    this.trigger("test_signal_5A06D");
  }

  test_signal_5A06D(_, el) {
    const storage = localStorage.getItem("data_signal_5A06D");
    el.innerHTML = JSON.parse(storage).data.status;
  }
};
