window.Class73A35 = class {
  #_el;

  bittyReady() {
    this.api.addTEXT("id-73A35", "TARGET_73A35");
    this.api.trigger("signal_73A35");
  }

  signal_73A35(ev, el) {
    const newEl = document.createElement("div");
    newEl.innerHTML = "example-73A35";
    const subs = {
      "TARGET_73A35": newEl,
    };
    const expected = "<div>example-73A35</div>";
    const got = this.api.text("id-73A35", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
