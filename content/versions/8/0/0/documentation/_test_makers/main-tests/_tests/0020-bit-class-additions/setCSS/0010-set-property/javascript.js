window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("run_$SIGNAL_NAME verify_$SIGNAL_NAME");
  }

  run_$SIGNAL_NAME(_, el) {
    this.setCSS("--$STYLE_NAME", "crimson");
  }

  verify_$SIGNAL_NAME(_, el) {
    const gotValue = document
      .documentElement
      .style
      .getPropertyValue("--$STYLE_NAME");
    if (gotValue === "crimson") {
      el.innerHTML = "ok";
    }
  }
};
