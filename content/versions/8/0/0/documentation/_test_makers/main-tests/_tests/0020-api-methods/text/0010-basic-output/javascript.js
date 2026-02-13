window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const expected = "$EXAMPLE_NAME";
    const got = this.api.text("$ID_NAME");
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
