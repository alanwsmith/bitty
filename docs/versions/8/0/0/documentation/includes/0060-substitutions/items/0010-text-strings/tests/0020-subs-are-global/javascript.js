window.Class71AEF = class {
  bittyReady() {
    this.api.trigger("signal_71AEF");
  }

  signal_71AEF(ev, el) {
    const template = "TARGET_71AEF-TARGET_71AEF";
    const subs = {
      "TARGET_71AEF": "REPLACED_71AEF",
    };
    const expected = "REPLACED_71AEF-REPLACED_71AEF";
    const got = this.api.makeTEXT(template, subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
