window.ClassF7489 = class {
  #key = "fragment_signal_F7489";

  test_signal_F7489(_, el) {
    const template = document.createElement("template");
    template.innerHTML = "<div></div><div>ok</div>";
    const subs = {
      "TARGET_F7489": template.content,
    };
    const fragment = this.renderFragment(this.#key, subs);
    el.innerHTML = fragment.firstChild.children[1].innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_F7489");
  }

  given_signal_F7489(_, __) {
    this.setLogLevel("none");
    this.createFragment(this.#key, `<div>TARGET_F7489</div>`);
    this.trigger("test_signal_F7489");
  }
};
