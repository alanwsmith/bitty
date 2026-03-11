window.$CLASS_NAME = class {
  bittyReady() {
    this.api.addTEXT(
      "$ID_NAME",
      "$EXAMPLE_NAME TARGET_$HASH",
    );
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const subs = { "TARGET_$HASH": "UPDATED_$HASH" };
    const expected = "$EXAMPLE_NAME UPDATED_$HASH";
    const got = this.api.renderTEXT("$ID_NAME", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
