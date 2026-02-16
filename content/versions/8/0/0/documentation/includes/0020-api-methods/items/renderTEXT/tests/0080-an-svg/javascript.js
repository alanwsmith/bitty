window.Class598C9 = class {
  bittyReady() {
    this.api.addTEXT("id-598C9", "TARGET_598C9");
    this.api.trigger("signal_598C9");
  }

  signal_598C9(ev, el) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const subs = {
      "TARGET_598C9": svg,
    };
    const expected = "<svg></svg>";
    const got = this.api.renderTEXT("id-598C9", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
