window.ClassDC5B2 = class {
  #key = "fragment_signal_DC5B2";

  test_signal_DC5B2(_, el) {
    const template = document.createElement("template");
    template.innerHTML = "<div></div><div>ok</div>";
    const subs = {
      "TARGET_DC5B2": template.content,
    };
    const fragment = this.renderFragment(this.#key, subs);
    //    el.innerHTML = fragment.firstChild.children[1].innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_DC5B2");
  }

  given_signal_DC5B2(_, __) {
    this.setLogLevel("none");
    this.createFragment(this.#key, `<div>TARGET_DC5B2</div>`);
    this.trigger("test_signal_DC5B2");
  }
};
