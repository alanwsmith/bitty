window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const template = "TARGET_$HASH";
    const subs = {
      "TARGET_$HASH": "REPLACED_$HASH",
    };
    const expected = "REPLACED_$HASH";
    const got = this.api.makeTEXT(template, subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
