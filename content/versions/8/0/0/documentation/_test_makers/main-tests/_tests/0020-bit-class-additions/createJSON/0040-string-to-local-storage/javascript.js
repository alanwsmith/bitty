window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    localStorage.removeItem("bittyJSON_data_$SIGNAL_NAME");
    const jsonString = `{ "status": "ok" }`;
    this.createJSON("data_$SIGNAL_NAME", jsonString);
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const verify =
      JSON.parse(localStorage.getItem("bittyJSON_data_$SIGNAL_NAME")).data;
    //    el.innerHTML = verify.status;
  }
};
