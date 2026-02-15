window.ClassE78EA = class {
  bittyReady() {
    this.api.addTEXT("id-E78EA", "TARGET_E78EA");
    this.api.trigger("signal_E78EA");
  }

  signal_E78EA(ev, el) {
    const items = [
      document.createDocumentFragment(),
      document.createDocumentFragment(),
    ];
    items[0].innerHTML = "<div>example-E78EA-1</div><div>example-E78EA-2</div>";
    items[1].innerHTML = "<div>example-E78EA-3</div><div>example-E78EA-4</div>";
    const subs = {
      "TARGET_E78EA": items,
    };
    const expected =
      "<div>example-E78EA-1</div><div>example-E78EA-2</div><div>example-E78EA-3</div><div>example-E78EA-4</div>";
    0;
    const got = this.api.text("id-E78EA", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
