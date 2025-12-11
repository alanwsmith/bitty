const initialValues = {
  lightness: 0.7,
  chroma: 0.05,
  hue: 300,
};

export default class {
  bittyReady() {
    this.api.localTrigger("initialValue");
  }

  initialValue(_ev, el) {
    const param = el.getString("param");
    const value = initialValues[param];
    console.log(param);
    this.api.setProp(`--${param}`, value);
    el.value = value;
  }

  updateColor(ev, el) {
    window.requestAnimationFrame(() => {
      this.api.setProp(
        `--${ev.target.getString("param")}`,
        ev.target.floatValue,
      );
    });
  }
}
