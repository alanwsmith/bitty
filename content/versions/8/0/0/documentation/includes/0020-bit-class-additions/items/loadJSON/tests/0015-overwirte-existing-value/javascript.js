window.Class92D8A = class {
  bittyReady() {
    this.trigger("given_signal_92D8A");
  }

  given_signal_92D8A(_, __) {
    this.json["test_signal_92D8A"] = JSON.parse(
      `{ "status": "failed to overwrite"}`,
    );
    const jsonAsString = `{ "data": { "status": "ok"} }`;
    localStorage.setItem("data_signal_92D8A", jsonAsString);
    this.trigger("test_signal_92D8A");
  }

  test_signal_92D8A(_, el) {
    const result = this.loadJSON("data_signal_92D8A");
    if (result.ok === true) {
      el.innerHTML = this.json["data_signal_92D8A"].status;
    }
  }
};
