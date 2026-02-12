window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const template = "TARGET_ALFA";
    const subs = [
      "TARGET_ALFA",
      "new_alfa",
    ];
    const expected = "new_alfa";
    const got = this.api.makeTEXT(template, subs);
    console.log(got);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
