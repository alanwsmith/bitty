window.ClassA321E = class {
  bittyReady() {
    this.api.trigger("signal_A321E");
  }

  signal_A321E(ev, el) {
    const subs = { "TARGET_A321E": "UPDATED_A321E" };
    const expected = "example-A321E UPDATED_A321E";
    const got = this.api.textFromTemplate("id-A321E", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
