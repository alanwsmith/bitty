window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.addJSON(
      "json_$SIGNAL_NAME",
      { status: "ok" },
    );
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const result = this.loadJSON("json_$SIGNAL_NAME");
    console.log(result);
    if (result.ok === true && result.level === "warn") {
      el.innerHTML = this.json["json_$SIGNAL_NAME"].status;
    }
  }
};
