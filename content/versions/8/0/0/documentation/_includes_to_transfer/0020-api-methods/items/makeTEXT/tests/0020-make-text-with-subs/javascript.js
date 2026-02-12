window.Class6ADEB = class {
  bittyReady() {
    this.api.trigger("signal_6ADEB");
  }

  signal_6ADEB(ev, el) {
    const template = "TARGET_ALFA";
    const subs = ["TARGET_ALFA", "updated_alfa"];
    const expected = "updated_alfa";
    const got = this.api.makeTEXT(template, subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
