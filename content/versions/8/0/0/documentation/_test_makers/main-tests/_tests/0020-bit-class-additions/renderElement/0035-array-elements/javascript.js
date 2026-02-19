window.$CLASS_NAME = class {
  #key = "el_$SIGNAL_NAME";

  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.addElement(this.#key, `<div>TARGET_$HASH</div>`);
    this.addElement(`replace1_$HASH`, `<div class="test">ok</div>`);
    this.addElement(`replace2_$HASH`, `<div class="test">ok</div>`);
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const subs = {
      "TARGET_$HASH": [
        this.element[`replace1_$HASH`],
        this.element[`replace2_$HASH`],
      ],
    };
    el.replaceWith(
      this.renderElement(this.#key, subs),
    );
  }
};
