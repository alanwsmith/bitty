window.$CLASS_NAME = class {
  #newStyles = `:root { --$STYLE_NAME: crimson; }`;
  #sheetThatWasAdded;

  bittyReady() {
    this.api.trigger("run_$SIGNAL_NAME verify_$SIGNAL_NAME");
  }

  run_$SIGNAL_NAME(_, __) {
    this.#sheetThatWasAdded = this.api.addCSS(
      this.#newStyles,
    );
  }

  verify_$SIGNAL_NAME(_, el) {
    const result = this.#sheetThatWasAdded.rules[0].cssText;
    if (result === this.#newStyles) {
      el.innerHTML = "ok";
    }
  }
};
