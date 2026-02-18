window.ClassC117E = class {
  bittyReady() {
    this.trigger("given_signal_C117E");
  }

  given_signal_C117E(_, __) {
    localStorage.removeItem("bittyJSON_data_signal_C117E");
    const jsonString = `{ "status": "ok" }`;
    this.addJSON("data_signal_C117E", jsonString);
    this.trigger("test_signal_C117E");
  }

  test_signal_C117E(_, el) {
    const verify =
      JSON.parse(localStorage.getItem("bittyJSON_data_signal_C117E")).data;
    el.innerHTML = verify.status;
  }
};
