window.ClassF3756 = class {
  #newStyles = `:root { --el-F3756: crimson; }`;
  #sheetThatWasAdded;

  bittyReady() {
    this.api.trigger("run_signal_F3756 verify_signal_F3756");
  }

  run_signal_F3756(_, __) {
    this.#sheetThatWasAdded = this.api.addStylesheet(
      this.#newStyles,
    );
  }

  verify_signal_F3756(_, el) {
    const result = this.#sheetThatWasAdded.rules[0].cssText;
    if (result === this.#newStyles) {
      el.innerHTML = "ok";
    }
  }
};
