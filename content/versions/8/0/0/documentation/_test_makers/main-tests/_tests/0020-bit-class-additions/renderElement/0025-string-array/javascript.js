window.$CLASS_NAME = class {
  #key = "el_$SIGNAL_NAME";

  test_$SIGNAL_NAME(_, el) {
    const subs = {
      "TARGET_$HASH": ["o", "k"],
    };
    el.replaceWith(
      this.renderElement(this.#key, subs),
    );
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.createElement(this.#key, `<div class="test">TARGET_$HASH</div>`);
    this.trigger("test_$SIGNAL_NAME");
  }
};
