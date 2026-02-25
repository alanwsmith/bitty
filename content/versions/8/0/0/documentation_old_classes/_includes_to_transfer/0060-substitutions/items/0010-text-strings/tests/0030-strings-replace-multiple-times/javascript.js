window.Class33805 = class {
  bittyReady() {
    this.api.trigger("signal_33805");
  }

  signal_33805(ev, el) {
    const template = "TARGET_ALFA TARGET_ALFA";
    const subs = [
      "TARGET_ALFA",
      "updated_alfa",
    ];
    const expected = "updated_alfa updated_alfa";
    const got = this.api.makeTEXT(template, subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
