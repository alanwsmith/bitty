window.Class81AA3 = class {
  #key = "el_signal_81AA3";

  bittyReady() {
    this.trigger("given_signal_81AA3");
  }

  given_signal_81AA3(_, __) {
    this.addElement(this.#key, `<div>TARGET_81AA3</div>`);
    this.addFragment(
      `replacement1_81AA3`,
      `<div class="test">ok</div><div class="test">ok</div>`,
    );
    this.addFragment(
      `replacement2_81AA3`,
      `<div class="test">ok</div><div class="test">ok</div>`,
    );
    this.trigger("test_signal_81AA3");
  }

  test_signal_81AA3(_, el) {
    const subs = {
      "TARGET_81AA3": [
        this.fragment[`replacement1_81AA3`],
        this.fragment[`replacement2_81AA3`],
      ],
    };
    el.replaceWith(
      this.renderElement(this.#key, subs),
    );
  }
};
