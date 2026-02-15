window.Class5AAB0 = class {
  bittyReady() {
    this.api.addTEXT(
      "id-5AAB0",
      "example-5AAB0 TARGET_5AAB0",
    );
    this.api.trigger("signal_5AAB0");
  }

  signal_5AAB0(ev, el) {
    const subs = { "TARGET_5AAB0": "UPDATED_5AAB0" };
    const expected = "example-5AAB0 UPDATED_5AAB0";
    const got = this.api.text("id-5AAB0", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
