window.$CLASS_NAME = class {
  bittyReady() {
    this.api.addTEXT("$ID_NAME", "TARGET_$HASH");
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const subs = {
      "TARGET_$HASH": svg,
    };
    const expected = "<svg></svg>";
    const got = this.api.renderTEXT("$ID_NAME", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
