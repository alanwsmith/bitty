window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("run_$SIGNAL_NAME");
  }

  run_$SIGNAL_NAME(_, __) {
    const styles = `:root { --$STYLE_NAME: crimson; }`;
    this.api.addStyles(styles);
    this.api.trigger("verify_$SIGNAL_NAME");
  }

  verify_$SIGNAL_NAME(_, el) {
    const result = document
      .documentElement
      .style
      .getPropertyValue("--$STYLE_NAME");
    if (result === "crimson") {
      el.innerHTML = "ok";
    }
  }
};
