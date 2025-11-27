export default class {
  startInput(_, el) {
    el.value = 0;
  }

  updateColor(ev, _) {
    window.requestAnimationFrame(() => {
      this.api.setProp("--hue", ev.target.intValue);
    });
  }
}
