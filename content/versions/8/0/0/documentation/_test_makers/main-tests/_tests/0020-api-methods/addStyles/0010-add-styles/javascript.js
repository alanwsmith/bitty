window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const styles = `
:root {
  --style-$SIGNAL_NAME: crimson;
}`;

    this.api.addStyles(styles);

    el.innerHTML = "in-progress";
  }
};
