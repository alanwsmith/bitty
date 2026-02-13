window.Class9B8D5 = class {
  bittyReady() {
    this.api.trigger("signal_9B8D5");
  }

  signal_9B8D5(ev, el) {
    const template = "TARGET_9B8D5";
    const subs = {
      "TARGET_9B8D5": "REPLACED_9B8D5",
    };
    const expected = "REPLACED_9B8D5";
    const got = this.api.makeTEXT(template, subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
