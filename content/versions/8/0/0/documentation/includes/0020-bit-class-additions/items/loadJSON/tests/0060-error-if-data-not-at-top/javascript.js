window.ClassDBB47 = class {
  bittyReady() {
    this.trigger("given_signal_DBB47");
  }

  given_signal_DBB47(_, __) {
    this.logLevel = 0;
    const noDataAtTop = `{}`;
    localStorage.setItem("data_signal_DBB47", noDataAtTop);
    this.trigger("test_signal_DBB47");
  }

  test_signal_DBB47(_, el) {
    const result = this.loadJSON("data_signal_DBB47");
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};
