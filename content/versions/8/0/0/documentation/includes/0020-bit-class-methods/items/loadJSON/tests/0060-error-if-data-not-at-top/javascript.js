window.Class5231C = class {
  bittyReady() {
    this.trigger("given_signal_5231C");
  }

  given_signal_5231C(_, __) {
    this.logLevel = 0;
    const noDataAtTop = `{}`;
    localStorage.setItem("data_signal_5231C", noDataAtTop);
    this.trigger("test_signal_5231C");
  }

  test_signal_5231C(_, el) {
    const result = this.loadJSON("data_signal_5231C");
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};
