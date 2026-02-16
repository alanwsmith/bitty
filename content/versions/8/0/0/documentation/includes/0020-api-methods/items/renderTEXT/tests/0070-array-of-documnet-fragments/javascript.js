window.Class6151A = class {
  bittyReady() {
    this.api.addTEXT("id-6151A", "TARGET_6151A");
    this.api.trigger("signal_6151A");
  }

  signal_6151A(ev, el) {
    const items = [
      document.createDocumentFragment(),
      document.createDocumentFragment(),
    ];
    items[0].innerHTML = "<div>example-6151A-1</div><div>example-6151A-2</div>";
    items[1].innerHTML = "<div>example-6151A-3</div><div>example-6151A-4</div>";
    const subs = {
      "TARGET_6151A": items,
    };
    const expected =
      "<div>example-6151A-1</div><div>example-6151A-2</div><div>example-6151A-3</div><div>example-6151A-4</div>";
    0;
    const got = this.api.renderTEXT("id-6151A", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
