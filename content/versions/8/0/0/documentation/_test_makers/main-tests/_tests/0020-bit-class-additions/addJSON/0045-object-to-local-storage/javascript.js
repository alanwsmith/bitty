window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    localStorage.removeItem("data_$SIGNAL_NAME");
    const jsonObject = { status: "ok" };
    this.addJSON("data_$SIGNAL_NAME", jsonObject);
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const verify = JSON.parse(localStorage.getItem("data_$SIGNAL_NAME")).data;
    el.innerHTML = verify.status;
  }
};
