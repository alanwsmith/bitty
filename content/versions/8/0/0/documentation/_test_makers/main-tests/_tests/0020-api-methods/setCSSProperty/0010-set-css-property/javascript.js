window.$CLASS_NAME = class {
  bittyReady() {
    console.log("here1");
    this.api.trigger(`set_$SIGNAL_NAME`);
  }

  set_$SIGNAL_NAME(_, el) {
    console.log("here2");
    this.api.setCSSProperty("--$STYLE_NAME", "crimson");
    this.api.trigger("verify_$SIGNAL_NAME");
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
