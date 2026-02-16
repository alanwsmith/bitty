window.ClassA9659 = class {
  bittyReady() {
    this.api.addTEXT("id-A9659", "TARGET_A9659");
    this.api.trigger("signal_A9659");
  }

  signal_A9659(_, el) {
    const items = [
      document.createElement("div"),
      document.createElement("div"),
    ];
    items[0].innerHTML = "example-A9659-1";
    items[1].innerHTML = "example-A9659-2";
    const subs = {
      "TARGET_A9659": items,
    };
    const expected = "<div>example-A9659-1</div><div>example-A9659-2</div>";
    const got = this.api.renderTEXT("id-A9659", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
