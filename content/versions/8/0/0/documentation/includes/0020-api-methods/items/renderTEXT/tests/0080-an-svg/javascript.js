window.Class57B24 = class {
  bittyReady() {
    this.api.addTEXT("id-57B24", "TARGET_57B24");
    this.api.trigger("signal_57B24");
  }

  signal_57B24(ev, el) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const subs = {
      "TARGET_57B24": svg,
    };
    const expected = "<svg></svg>";
    const got = this.api.renderTEXT("id-57B24", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
