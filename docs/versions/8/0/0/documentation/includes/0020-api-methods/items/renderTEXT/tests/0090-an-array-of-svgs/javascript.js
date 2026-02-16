window.Class3ABED = class {
  bittyReady() {
    this.api.addTEXT("id-3ABED", "TARGET_3ABED");
    this.api.trigger("signal_3ABED");
  }

  signal_3ABED(ev, el) {
    const items = [
      document.createElementNS("http://www.w3.org/2000/svg", "svg"),
      document.createElementNS("http://www.w3.org/2000/svg", "svg"),
    ];
    const subs = {
      "TARGET_3ABED": items,
    };
    const expected = "<svg></svg><svg></svg>";
    const got = this.api.renderTEXT("id-3ABED", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
