window.ClassF7F0A = class {
  #key = "el_signal_F7F0A";

  bittyReady() {
    this.trigger("given_signal_F7F0A");
  }

  given_signal_F7F0A(_, __) {
    this.addElement(this.#key, `<div>TARGET_F7F0A</div>`);
    this.addElement(`replace1_F7F0A`, `<div class="test">ok</div>`);
    this.addElement(`replace2_F7F0A`, `<div class="test">ok</div>`);
    this.trigger("test_signal_F7F0A");
  }

  test_signal_F7F0A(_, el) {
    const subs = {
      "TARGET_F7F0A": [
        this.element[`replace1_F7F0A`],
        this.element[`replace2_F7F0A`],
      ],
    };
    el.replaceWith(
      this.renderElement(this.#key, subs),
    );
  }
};
