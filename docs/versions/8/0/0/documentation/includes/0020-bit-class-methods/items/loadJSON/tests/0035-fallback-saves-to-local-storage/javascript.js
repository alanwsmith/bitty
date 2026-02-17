window.ClassEA68C = class {
  bittyReady() {
    this.trigger("given_signal_EA68C");
  }

  given_signal_EA68C(_, __) {
    const fallback = JSON.parse(`{ "status": "ok" }`);
    const result = this.loadJSON("data_signal_EA68C", fallback);
    this.trigger("test_signal_EA68C");
  }

  test_signal_EA68C(_, el) {
    const data = localStorage.getItem("data_signal_EA68C");
    el.innerHTML = data;
  }
};
