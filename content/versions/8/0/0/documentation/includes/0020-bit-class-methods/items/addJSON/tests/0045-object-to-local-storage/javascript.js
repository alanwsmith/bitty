window.ClassD4CEC = class {
  bittyReady() {
    this.trigger("given_signal_D4CEC");
  }

  given_signal_D4CEC(_, __) {
    localStorage.removeItem("data_signal_D4CEC");
    const jsonObject = { status: "ok" };
    this.addJSON("data_signal_D4CEC", jsonObject);
    this.trigger("test_signal_D4CEC");
  }

  test_signal_D4CEC(_, el) {
    const verify = JSON.parse(localStorage.getItem("data_signal_D4CEC")).data;
    el.innerHTML = verify.status;
  }
};
