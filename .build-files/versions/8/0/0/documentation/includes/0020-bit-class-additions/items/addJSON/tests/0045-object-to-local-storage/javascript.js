window.ClassA4EF0 = class {
  bittyReady() {
    this.trigger("given_signal_A4EF0");
  }

  given_signal_A4EF0(_, __) {
    localStorage.removeItem("bittyJSON_data_signal_A4EF0");
    const jsonObject = { status: "ok" };
    this.addJSON("data_signal_A4EF0", jsonObject);
    this.trigger("test_signal_A4EF0");
  }

  test_signal_A4EF0(_, el) {
    const verify =
      JSON.parse(localStorage.getItem("bittyJSON_data_signal_A4EF0")).data;
    el.innerHTML = verify.status;
  }
};
