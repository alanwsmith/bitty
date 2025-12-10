window.ChangeFontSize = class {
  setStartingFontSize(_, el) {
    const initialValue = 1.1;
    el.value = initialValue;
    this.api.setProp(
      `--example-font-size`,
      `${initialValue}rem`,
    );
  }

  changeFontSize(ev, _) {
    window.requestAnimationFrame(() => {
      const value = `${ev.value}rem`;
      this.api.setProp(`--example-font-size`, value);
    });
  }
};
