window.Class335C4 = class {
  bittyReady() {
    this.api.addTEXT("id-335C4", "example-335C4 TARGET_335C4");
    this.api.trigger("signal_335C4");
  }

  signal_335C4(ev, el) {
    const subs = {
      "TARGET_335C4": ["OUT_1_335C4", " OUT_2_335C4", " OUT_3_335C4"],
    };
    const expected = "example-335C4 OUT_1_335C4 OUT_2_335C4 OUT_3_335C4";
    const got = this.api.renderTEXT("id-335C4", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
