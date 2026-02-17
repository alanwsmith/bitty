window.Class2B0F2 = class {
  bittyReady() {
    this.trigger("given_signal_2B0F2");
  }

  given_signal_2B0F2(_, __) {
    localStorage.removeItem("data_signal_2B0F2");
    const jsonString = `{ "status": "ok" }`;
    this.addJSON("data_signal_2B0F2", jsonString);
    this.trigger("test_signal_2B0F2");
  }

  test_signal_2B0F2(_, el) {
    const verify = JSON.parse(localStorage.getItem("data_signal_2B0F2")).data;
    el.innerHTML = verify.status;
  }
};
