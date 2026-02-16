window.ClassF6A4F = class {
  #_el;

  bittyReady() {
    this.api.addTEXT("id-F6A4F", "TARGET_F6A4F");
    this.api.trigger("signal_F6A4F");
  }

  signal_F6A4F(ev, el) {
    const newEl = document.createElement("div");
    newEl.innerHTML = "example-F6A4F";
    const subs = {
      "TARGET_F6A4F": newEl,
    };
    const expected = "<div>example-F6A4F</div>";
    const got = this.api.renderTEXT("id-F6A4F", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
