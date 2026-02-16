window.Class95A32 = class {
  bittyReady() {
    this.api.addTEXT("id-95A32", "example-95A32");
    this.api.trigger("signal_95A32");
  }

  signal_95A32(ev, el) {
    const expected = "example-95A32";
    const got = this.api.renderTEXT("id-95A32");
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
