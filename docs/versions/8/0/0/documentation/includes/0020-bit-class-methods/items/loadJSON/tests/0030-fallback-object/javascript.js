window.Class3D8C7 = class {
  bittyReady() {
    this.trigger("given_signal_3D8C7");
  }

  given_signal_3D8C7(_, __) {
    localStorage.removeItem("data_signal_3D8C7");
    this.trigger("test_signal_3D8C7");
  }

  test_signal_3D8C7(_, el) {
    const fallback = JSON.parse(`{ "status": "ok" }`);
    const result = this.loadJSON("data_signal_3D8C7", fallback);
    if (result.ok === true) {
      el.innerHTML = this.json["data_signal_3D8C7"].status;
    }
  }
};
