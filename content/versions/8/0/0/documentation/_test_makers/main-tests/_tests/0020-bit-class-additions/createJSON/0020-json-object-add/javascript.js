window.$CLASS_NAME = class {
  #key = "json_$SIGNAL_NAME";

  test_$SIGNAL_NAME(_, el) {
    const jsonObject = JSON.parse(`{ "status": "ok" }`);
    this.createJSON(this.#key, jsonObject);
    el.innerHTML = this.json[this.#key].status;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_$SIGNAL_NAME");
  }
};
