export default class {
  setStartingFontSize(_ev, el) {
    const initialValue = 1.1;
    el.value = initialValue;
    this.api.setProp(`--example-font-size`, `${initialValue}rem`);
  }

  changeFontSize(ev, _el) {
    window.requestAnimationFrame(() => {
      const value = `${ev.val}rem`;
      this.api.setProp(`--example-font-size`, value);
    });
  }
}
