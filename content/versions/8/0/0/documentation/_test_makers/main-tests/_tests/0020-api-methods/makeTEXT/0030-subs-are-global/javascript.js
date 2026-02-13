window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const template = "TARGET_$HASH-TARGET_$HASH";
    const subs = { "TARGET_$HASH": "UPDATED_$HASH" };
    const expected = "UPDATED_$HASH-UPDATED_$HASH";
    const got = this.api.makeTEXT(template, subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
