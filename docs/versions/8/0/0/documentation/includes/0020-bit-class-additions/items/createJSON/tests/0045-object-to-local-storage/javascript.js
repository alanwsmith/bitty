window.ClassB3DA4 = class {
  bittyReady() {
    this.trigger("given_signal_B3DA4");
  }

  given_signal_B3DA4(_, __) {
    localStorage.removeItem("bittyJSON_data_signal_B3DA4");
    const jsonObject = { status: "ok" };
    this.addJSON("data_signal_B3DA4", jsonObject);
    this.trigger("test_signal_B3DA4");
  }

  test_signal_B3DA4(_, el) {
    const verify =
      JSON.parse(localStorage.getItem("bittyJSON_data_signal_B3DA4")).data;
    //    el.innerHTML = verify.status;
  }
};
