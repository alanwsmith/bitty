window.Class15175 = class {
  bittyReady() {
    this.api.addTEXT("id-15175", "TARGET_15175");
    this.api.trigger("signal_15175");
  }

  signal_15175(ev, el) {
    const items = [
      document.createElementNS("http://www.w3.org/2000/svg", "svg"),
      document.createElementNS("http://www.w3.org/2000/svg", "svg"),
    ];
    const subs = {
      "TARGET_15175": items,
    };
    const expected = "<svg></svg><svg></svg>";
    const got = this.api.renderTEXT("id-15175", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
