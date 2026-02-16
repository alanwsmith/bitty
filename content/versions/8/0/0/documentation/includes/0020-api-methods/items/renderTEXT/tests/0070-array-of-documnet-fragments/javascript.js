window.Class97643 = class {
  bittyReady() {
    this.api.addTEXT("id-97643", "TARGET_97643");
    this.api.trigger("signal_97643");
  }

  signal_97643(ev, el) {
    const items = [
      document.createDocumentFragment(),
      document.createDocumentFragment(),
    ];
    items[0].innerHTML = "<div>example-97643-1</div><div>example-97643-2</div>";
    items[1].innerHTML = "<div>example-97643-3</div><div>example-97643-4</div>";
    const subs = {
      "TARGET_97643": items,
    };
    const expected =
      "<div>example-97643-1</div><div>example-97643-2</div><div>example-97643-3</div><div>example-97643-4</div>";
    0;
    const got = this.api.renderTEXT("id-97643", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
