window.ClassB800A = class {
  bittyReady() {
    this.api.trigger("signal_B800A");
  }

  signal_B800A(ev, el) {
    const template = "TARGET_ALFA";
    const subs = [
      "TARGET_ALFA",
    ];
    const expected = undefined;
    const got = this.api.makeTEXT(template, subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
