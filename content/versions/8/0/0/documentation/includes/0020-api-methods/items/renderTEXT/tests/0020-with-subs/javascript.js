window.ClassC19A7 = class {
  bittyReady() {
    this.api.addTEXT(
      "id-C19A7",
      "example-C19A7 TARGET_C19A7",
    );
    this.api.trigger("signal_C19A7");
  }

  signal_C19A7(ev, el) {
    const subs = { "TARGET_C19A7": "UPDATED_C19A7" };
    const expected = "example-C19A7 UPDATED_C19A7";
    const got = this.api.renderTEXT("id-C19A7", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
