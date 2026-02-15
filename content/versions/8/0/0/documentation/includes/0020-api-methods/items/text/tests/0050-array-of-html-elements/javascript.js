window.Class38706 = class {
  bittyReady() {
    this.api.addTEXT("id-38706", "TARGET_38706");
    this.api.trigger("signal_38706");
  }

  signal_38706(_, el) {
    const items = [
      document.createElement("div"),
      document.createElement("div"),
    ];
    items[0].innerHTML = "example-38706-1";
    items[1].innerHTML = "example-38706-2";
    const subs = {
      "TARGET_38706": items,
    };
    const expected = "<div>example-38706-1</div><div>example-38706-2</div>";
    const got = this.api.text("id-38706", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
