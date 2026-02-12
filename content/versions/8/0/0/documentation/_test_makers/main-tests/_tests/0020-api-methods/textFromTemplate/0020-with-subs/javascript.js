window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const subs = [
      "TARGET_ALFA",
      "updated_alfa",
    ];
    const expected = "$EXAMPLE_NAME updated_alfa";
    const got = this.api.textFromTemplate("$ID_NAME", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
