window.Class59941 = class {
  bittyReady() {
    this.trigger("given_signal_59941");
  }

  given_signal_59941(_, __) {
    this.json["data_signal_59941"] = JSON.parse(`{ "status": "ok" }`);
    this.trigger("test_signal_59941");
  }

  test_signal_59941(_, el) {
    const result = this.saveJSON("data_signal_59941");
    if (result.ok === true) {
      el.innerHTML = "ok";
    }
  }
};
