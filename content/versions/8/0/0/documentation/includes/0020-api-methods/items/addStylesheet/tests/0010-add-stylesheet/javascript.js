window.Class2E507 = class {
  #newStyles = `:root { --el-2E507: crimson; }`;
  #sheetThatWasAdded;

  bittyReady() {
    this.api.trigger("run_signal_2E507 verify_signal_2E507");
  }

  run_signal_2E507(_, __) {
    this.#sheetThatWasAdded = this.api.addStylesheet(
      this.#newStyles,
    );
  }

  verify_signal_2E507(_, el) {
    const result = this.#sheetThatWasAdded.rules[0].cssText;
    if (result === this.#newStyles) {
      el.innerHTML = "ok";
    }
  }
};
