window.ClassB840F = class {
  #_el;

  bittyReady() {
    this.api.addTEXT("id-B840F", "TARGET_B840F");
    this.api.trigger("signal_B840F");
  }

  signal_B840F(ev, el) {
    const newEl = document.createElement("div");
    newEl.innerHTML = "example-B840F";
    const subs = {
      "TARGET_B840F": newEl,
    };
    const expected = "<div>example-B840F</div>";
    const got = this.api.renderTEXT("id-B840F", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
