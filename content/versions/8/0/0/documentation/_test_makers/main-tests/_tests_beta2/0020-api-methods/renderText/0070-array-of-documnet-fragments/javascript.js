window.$CLASS_NAME = class {
  bittyReady() {
    this.api.addTEXT("$ID_NAME", "TARGET_$HASH");
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const items = [
      document.createDocumentFragment(),
      document.createDocumentFragment(),
    ];
    items[0].innerHTML = "<div>$EXAMPLE_NAME-1</div><div>$EXAMPLE_NAME-2</div>";
    items[1].innerHTML = "<div>$EXAMPLE_NAME-3</div><div>$EXAMPLE_NAME-4</div>";
    const subs = {
      "TARGET_$HASH": items,
    };
    const expected =
      "<div>$EXAMPLE_NAME-1</div><div>$EXAMPLE_NAME-2</div><div>$EXAMPLE_NAME-3</div><div>$EXAMPLE_NAME-4</div>";
    0;
    const got = this.api.renderTEXT("$ID_NAME", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
