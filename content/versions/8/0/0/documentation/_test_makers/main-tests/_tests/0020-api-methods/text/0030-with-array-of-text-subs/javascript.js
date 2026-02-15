window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const subs = {
      "TARGET_$HASH": ["OUT_1_$HASH", " OUT_2_$HASH", " OUT_3_$HASH"],
    };
    const expected = "$EXAMPLE_NAME OUT_1_$HASH OUT_2_$HASH OUT_3_$HASH";
    const got = this.api.text("$ID_NAME", subs);
    console.log(got);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
