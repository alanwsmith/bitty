window.Class4BF6E = class {
  bittyReady() {
    this.api.addTEXT(
      "id-4BF6E",
      "example-4BF6E TARGET_4BF6E",
    );
    this.api.trigger("signal_4BF6E");
  }

  signal_4BF6E(ev, el) {
    const subs = { "TARGET_4BF6E": "UPDATED_4BF6E" };
    const expected = "example-4BF6E UPDATED_4BF6E";
    const got = this.api.renderTEXT("id-4BF6E", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
