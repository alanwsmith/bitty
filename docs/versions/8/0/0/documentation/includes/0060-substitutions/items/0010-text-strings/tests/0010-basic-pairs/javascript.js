window.ClassB991E = class {
  bittyReady() {
    this.api.trigger("signal_B991E");
  }

  signal_B991E(ev, el) {
    const template = "TARGET_ALFA";
    const subs = ["TARGET_ALFA", "updated_alfa"];
    const expected = "updated_alfa";
    const got = this.api.makeTEXT(template, subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
