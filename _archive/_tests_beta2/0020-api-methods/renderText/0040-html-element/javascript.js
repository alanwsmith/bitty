window.$CLASS_NAME = class {
  #_el;

  bittyReady() {
    this.api.addTEXT("$ID_NAME", "TARGET_$HASH");
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const newEl = document.createElement("div");
    newEl.innerHTML = "$EXAMPLE_NAME";
    const subs = {
      "TARGET_$HASH": newEl,
    };
    const expected = "<div>$EXAMPLE_NAME</div>";
    const got = this.api.renderTEXT("$ID_NAME", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
