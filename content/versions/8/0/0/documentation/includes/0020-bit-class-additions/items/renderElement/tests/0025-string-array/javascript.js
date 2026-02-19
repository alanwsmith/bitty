window.Class317AA = class {
  #key = "el_signal_317AA";

  bittyReady() {
    this.trigger("given_signal_317AA");
  }

  given_signal_317AA(_, __) {
    this.addElement(this.#key, `<div class="test">TARGET_317AA</div>`);
    this.trigger("test_signal_317AA");
  }

  test_signal_317AA(_, el) {
    const subs = {
      "TARGET_317AA": ["o", "k"],
    };
    el.replaceWith(
      this.renderElement(this.#key, subs),
    );
  }
};
