window.Class39015 = class {
  bittyReady() {
    this.api.addTEXT("id-39015", "TARGET_39015");
    this.api.trigger("signal_39015");
  }

  signal_39015(_, el) {
    const items = [
      document.createElement("div"),
      document.createElement("div"),
    ];
    items[0].innerHTML = "example-39015-1";
    items[1].innerHTML = "example-39015-2";
    const subs = {
      "TARGET_39015": items,
    };
    const expected = "<div>example-39015-1</div><div>example-39015-2</div>";
    const got = this.api.renderTEXT("id-39015", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
