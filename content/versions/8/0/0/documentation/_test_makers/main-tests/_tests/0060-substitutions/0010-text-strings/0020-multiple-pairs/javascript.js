window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const template = "TARGET_ALFA TARGET_BRAVO";
    const subs = [
      "TARGET_ALFA",
      "updated_alfa",
      "TARGET_BRAVO",
      "updated_bravo",
    ];
    const expected = "updated_alfa updated_bravo";
    const got = this.api.makeTEXT(template, subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
