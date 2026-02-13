window.Class6ADEB = class {
  bittyReady() {
    this.api.trigger("signal_6ADEB");
  }

  signal_6ADEB(ev, el) {
    const template = "TARGET_6ADEB";
    const subs = { "TARGET_6ADEB": "UPDATED_6ADEB" };
    const expected = "UPDATED_6ADEB";
    const got = this.api.makeTEXT(template, subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
