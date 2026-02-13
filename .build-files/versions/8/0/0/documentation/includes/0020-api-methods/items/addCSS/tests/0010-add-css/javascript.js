window.ClassAF8D8 = class {
  #newStyles = `:root { --el-AF8D8: crimson; }`;
  #sheetThatWasAdded;

  bittyReady() {
    this.api.trigger("run_signal_AF8D8 verify_signal_AF8D8");
  }

  run_signal_AF8D8(_, __) {
    this.#sheetThatWasAdded = this.api.addCSS(
      this.#newStyles,
    );
  }

  verify_signal_AF8D8(_, el) {
    const result = this.#sheetThatWasAdded.rules[0].cssText;
    if (result === this.#newStyles) {
      el.innerHTML = "ok";
    }
  }
};
