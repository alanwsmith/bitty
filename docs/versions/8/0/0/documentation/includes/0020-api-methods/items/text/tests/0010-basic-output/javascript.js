window.Class594F6 = class {
  bittyReady() {
    this.api.addTEXT("id-594F6", "example-594F6");
    this.api.trigger("signal_594F6");
  }

  signal_594F6(ev, el) {
    const expected = "example-594F6";
    const got = this.api.text("id-594F6");
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
