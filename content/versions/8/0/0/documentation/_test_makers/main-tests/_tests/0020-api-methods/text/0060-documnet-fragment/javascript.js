window.$CLASS_NAME = class {
  bittyReady() {
    this.api.addTEXT("$ID_NAME", "TARGET_$HASH");
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const fragment = document.createDocumentFragment();
    fragment.innerHTML = "<div>$EXAMPLE_NAME-1</div><div>$EXAMPLE_NAME-2</div>";
    const subs = {
      "TARGET_$HASH": fragment,
    };
    const expected = "<div>$EXAMPLE_NAME-1</div><div>$EXAMPLE_NAME-2</div>";
    const got = this.api.text("$ID_NAME", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
