window.Class0CB4D = class {
  bittyReady() {
    this.api.addTEXT("id-0CB4D", "TARGET_0CB4D");
    this.api.trigger("signal_0CB4D");
  }

  signal_0CB4D(ev, el) {
    const items = [
      document.createElementNS("http://www.w3.org/2000/svg", "svg"),
      document.createElementNS("http://www.w3.org/2000/svg", "svg"),
    ];
    const subs = {
      "TARGET_0CB4D": items,
    };
    const expected = "<svg></svg><svg></svg>";
    const got = this.api.text("id-0CB4D", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
