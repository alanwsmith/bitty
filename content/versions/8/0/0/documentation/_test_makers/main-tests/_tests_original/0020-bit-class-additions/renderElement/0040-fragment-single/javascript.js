window.$CLASS_NAME = class {
  #key = "el_$SIGNAL_NAME";

  test_$SIGNAL_NAME(_, el) {
    const subs = {
      "TARGET_$HASH": this.renderFragment(`replacement_$HASH`),
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
      `replacement_$HASH`,
      `<div class="test">ok</div><div class="test">ok</div>`,
    );
    this.trigger("test_$SIGNAL_NAME");
  }
};
