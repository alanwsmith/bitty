window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const template = "TARGET_1_ALFA TARGET_2_ALFA";
    const subs = [
      /TARGET_\d_ALFA/g,
      "updated_alfa",
    ];
    const expected = "updated_alfa updated_alfa";
    const got = this.api.makeTEXT(template, subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
