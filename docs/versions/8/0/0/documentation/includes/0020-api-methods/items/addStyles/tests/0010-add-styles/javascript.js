window.Class8A1DD = class {
  bittyReady() {
    this.api.trigger("signal_8A1DD");
  }

  signal_8A1DD(ev, el) {
    const styles = `
:root {
  --style-signal_8A1DD: crimson;
}`;

    this.api.addStyles(styles);

    el.innerHTML = "in-progress";
  }
};
