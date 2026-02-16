window.ClassD7A25 = class {
  bittyReady() {
    this.api.addTEXT("id-D7A25", "example-D7A25 TARGET_D7A25");
    this.api.trigger("signal_D7A25");
  }

  signal_D7A25(ev, el) {
    const subs = {
      "TARGET_D7A25": ["OUT_1_D7A25", " OUT_2_D7A25", " OUT_3_D7A25"],
    };
    const expected = "example-D7A25 OUT_1_D7A25 OUT_2_D7A25 OUT_3_D7A25";
    const got = this.api.renderTEXT("id-D7A25", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
