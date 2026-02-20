window.ClassF7B2A = class {
  #key = "fragment_signal_F7B2A";

  test_signal_F7B2A(_, el) {
    const subs = {
      "TARGET_F7B2A": ["o", "k"],
    };
    const fragment = this.renderFragment(this.#key, subs);
    //    el.innerHTML = fragment.children[1].innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_F7B2A");
  }

  given_signal_F7B2A(_, __) {
    this.setLogLevel("none");
    this.createFragment(this.#key, `<div></div><div>TARGET_F7B2A</div>`);
    this.trigger("test_signal_F7B2A");
  }
};
