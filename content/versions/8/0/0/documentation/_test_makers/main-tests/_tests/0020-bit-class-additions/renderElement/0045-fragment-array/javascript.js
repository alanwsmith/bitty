window.$CLASS_NAME = class {
  #key = "el_$SIGNAL_NAME";

  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.addElement(this.#key, `<div>TARGET_$HASH</div>`);
    this.addFragment(
      `replacement1_$HASH`,
      `<div class="test">ok</div><div class="test">ok</div>`,
    );
    this.addFragment(
      `replacement2_$HASH`,
      `<div class="test">ok</div><div class="test">ok</div>`,
    );
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const subs = {
      "TARGET_$HASH": [
        this.fragment[`replacement1_$HASH`],
        this.fragment[`replacement2_$HASH`],
      ],
    };
    el.replaceWith(
      this.renderElement(this.#key, subs),
    );
  }
};
