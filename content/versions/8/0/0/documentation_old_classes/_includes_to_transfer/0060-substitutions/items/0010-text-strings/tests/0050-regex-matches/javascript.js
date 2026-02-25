window.Class631D6 = class {
  bittyReady() {
    this.api.trigger("signal_631D6");
  }

  signal_631D6(ev, el) {
    const template = "TARGET_1_ALFA TARGET_2_ALFA";
    const subs = [
      /TARGET_\d_ALFA/g,
      "updated_alfa",
    ];
    const expected = "updated_alfa updated_alfa";
    const got = this.api.makeTEXT(template, subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
