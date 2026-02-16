window.$CLASS_NAME = class {
  bittyReady() {
    this.api.addTEXT("$ID_NAME", "example-$HASH");
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const expected = "$EXAMPLE_NAME";
    const got = this.api.renderTEXT("$ID_NAME");
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
