window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("run_$SIGNAL_NAME verify_$SIGNAL_NAME");
  }

  run_$SIGNAL_NAME(_, el) {
    this.api.setCSSProperty("--$STYLE_NAME", "crimson");
  }

  verify_$SIGNAL_NAME(_, el) {
    const gotValue = document
      .documentElement
      .style
      .getPropertyValue("--$STYLE_NAME");
    if (gotValue === "crimson") {
      el.innerHTML = "ok";
    }
el.innerHTML = "TODO: Move to using bit class directly"
  }
};
