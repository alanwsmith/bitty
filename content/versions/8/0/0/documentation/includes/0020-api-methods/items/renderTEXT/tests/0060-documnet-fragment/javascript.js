window.ClassC8FAD = class {
  bittyReady() {
    this.api.addTEXT("id-C8FAD", "TARGET_C8FAD");
    this.api.trigger("signal_C8FAD");
  }

  signal_C8FAD(ev, el) {
    const fragment = document.createDocumentFragment();
    fragment.innerHTML = "<div>example-C8FAD-1</div><div>example-C8FAD-2</div>";
    const subs = {
      "TARGET_C8FAD": fragment,
    };
    const expected = "<div>example-C8FAD-1</div><div>example-C8FAD-2</div>";
    const got = this.api.renderTEXT("id-C8FAD", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
