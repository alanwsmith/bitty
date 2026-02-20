window.Class2515C = class {
  bittyReady() {
    this.trigger("given_signal_2515C");
  }

  given_signal_2515C(_, __) {
    localStorage.removeItem("bittyJSON_data_signal_2515C");
    const jsonString = `{ "status": "ok" }`;
    this.addJSON("data_signal_2515C", jsonString);
    this.trigger("test_signal_2515C");
  }

  test_signal_2515C(_, el) {
    const verify =
      JSON.parse(localStorage.getItem("bittyJSON_data_signal_2515C")).data;
    //    el.innerHTML = verify.status;
  }
};
