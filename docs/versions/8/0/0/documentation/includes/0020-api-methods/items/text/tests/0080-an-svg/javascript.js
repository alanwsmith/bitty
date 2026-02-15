window.ClassA06F9 = class {
  bittyReady() {
    this.api.addTEXT("id-A06F9", "TARGET_A06F9");
    this.api.trigger("signal_A06F9");
  }

  signal_A06F9(ev, el) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const subs = {
      "TARGET_A06F9": svg,
    };
    const expected = "<svg></svg>";
    const got = this.api.text("id-A06F9", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
