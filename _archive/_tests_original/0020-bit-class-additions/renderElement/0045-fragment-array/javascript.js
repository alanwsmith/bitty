window.$CLASS_NAME = class {
  #key = "el_$SIGNAL_NAME";

  test_$SIGNAL_NAME(_, el) {
    const subs = {
      "TARGET_$HASH": [
        this.renderFragment(`replacement1_$HASH`),
        this.renderFragment(`replacement2_$HASH`),
      ],
    };
    el.replaceWith(
      this.renderElement(this.#key, subs),
    );
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.createElement(this.#key, `<div>TARGET_$HASH</div>`);
    this.createFragment(
      `replacement1_$HASH`,
      `<div class="test">ok</div><div class="test">ok</div>`,
    );
    this.createFragment(
      `replacement2_$HASH`,
      `<div class="test">ok</div><div class="test">ok</div>`,
    );
    this.trigger("test_$SIGNAL_NAME");
  }
};
