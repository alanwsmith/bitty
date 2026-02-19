window.Class00B6E = class {
  #key = "el_signal_00B6E";

  bittyReady() {
    this.trigger("given_signal_00B6E");
  }

  given_signal_00B6E(_, __) {
    this.addElement(this.#key, `<div>TARGET_00B6E</div>`);
    this.createFragment(
      `replacement_00B6E`,
      `<div class="test">ok</div><div class="test">ok</div>`,
    );
    this.trigger("test_signal_00B6E");
  }

  test_signal_00B6E(_, el) {
    const subs = {
      "TARGET_00B6E": this.fragment[`replacement_00B6E`],
    };
    el.replaceWith(
      this.renderElement(this.#key, subs),
    );
  }
};
