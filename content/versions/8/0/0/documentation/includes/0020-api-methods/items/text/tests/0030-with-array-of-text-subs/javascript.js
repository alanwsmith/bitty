window.ClassA2CFB = class {
  bittyReady() {
    this.api.trigger("signal_A2CFB");
  }

  signal_A2CFB(ev, el) {
    const subs = {
      "TARGET_A2CFB": ["OUT_1_A2CFB", " OUT_2_A2CFB", " OUT_3_A2CFB"],
    };
    const expected = "example-A2CFB OUT_1_A2CFB OUT_2_A2CFB OUT_3_A2CFB";
    const got = this.api.text("id-A2CFB", subs);
    console.log(got);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
