window.$CLASS_NAME = class {
  bittyReady() {
    this.api.addTEXT("$ID_NAME", "TARGET_$HASH");
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const items = [
      document.createElement("div"),
      document.createElement("div"),
    ];
    items[0].innerHTML = "$EXAMPLE_NAME-1";
    items[1].innerHTML = "$EXAMPLE_NAME-2";
    const subs = {
      "TARGET_$HASH": items,
    };
    const expected = "<div>$EXAMPLE_NAME-1</div><div>$EXAMPLE_NAME-2</div>";
    const got = this.api.text("$ID_NAME", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
