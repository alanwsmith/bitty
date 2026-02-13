window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const subs = { "TARGET_$HASH": "UPDATED_$HASH" };
    const expected = "$EXAMPLE_NAME UPDATED_$HASH";
    const got = this.api.textFromTemplate("$ID_NAME", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
