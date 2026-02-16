window.Class48BB8 = class {
  bittyReady() {
    this.api.addTEXT("id-48BB8", "TARGET_48BB8");
    this.api.trigger("signal_48BB8");
  }

  signal_48BB8(ev, el) {
    const fragment = document.createDocumentFragment();
    fragment.innerHTML = "<div>example-48BB8-1</div><div>example-48BB8-2</div>";
    const subs = {
      "TARGET_48BB8": fragment,
    };
    const expected = "<div>example-48BB8-1</div><div>example-48BB8-2</div>";
    const got = this.api.renderTEXT("id-48BB8", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
