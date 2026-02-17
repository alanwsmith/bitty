window.ClassA55AA = class {
  bittyReady() {
    this.trigger("given_signal_A55AA");
  }

  given_signal_A55AA(_, __) {
    this.trigger("test_signal_A55AA");
  }

  test_signal_A55AA(_, el) {
    const jsonObject = JSON.parse(`{ "status": "ok" }`);
    this.addJSON("data_signal_A55AA", jsonObject);
    el.innerHTML = this.json["data_signal_A55AA"].status;
  }
};
