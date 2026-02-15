window.Class75F19 = class {
  bittyReady() {
    this.api.addTEXT("id-75F19", "TARGET_75F19");
    this.api.trigger("signal_75F19");
  }

  signal_75F19(ev, el) {
    const fragment = document.createDocumentFragment();
    fragment.innerHTML = "<div>example-75F19-1</div><div>example-75F19-2</div>";
    const subs = {
      "TARGET_75F19": fragment,
    };
    const expected = "<div>example-75F19-1</div><div>example-75F19-2</div>";
    const got = this.api.text("id-75F19", subs);
    if (expected === got) {
      el.innerHTML = "ok";
    }
    //el.innerHTML = got;
  }
};
