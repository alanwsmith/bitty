window.Class3ECFF = class {
  #key = "el_signal_3ECFF";

  bittyReady() {
    this.trigger("given_signal_3ECFF");
  }

  given_signal_3ECFF(_, __) {
    this.addElement(this.#key, `<div class="test">TARGET_3ECFF</div>`);
    this.trigger("test_signal_3ECFF");
  }

  test_signal_3ECFF(_, el) {
    const subs = {
      "TARGET_3ECFF": "ok",
    };
    el.replaceWith(
      this.renderElement(this.#key, subs),
    );
  }
};
