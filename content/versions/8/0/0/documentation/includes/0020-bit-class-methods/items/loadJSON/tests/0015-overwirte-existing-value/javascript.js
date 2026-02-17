window.ClassD781E = class {
  bittyReady() {
    this.trigger("given_signal_D781E");
  }

  given_signal_D781E(_, __) {
    this.json["test_signal_D781E"] = JSON.parse(
      `{ "status": "failed to overwrite"}`,
    );
    const jsonAsString = `{ "data": { "status": "ok"} }`;
    localStorage.setItem("test_signal_D781E", jsonAsString);
    this.trigger("verify_signal_D781E");
  }

  verify_signal_D781E(_, el) {
    const result = this.loadJSON("test_signal_D781E");
    if (result.ok === true) {
      el.innerHTML = this.json["test_signal_D781E"].status;
    }
  }
};
