window.$CLASS_NAME = class {
  bittyReady() {
    this.api.setCSS("--$STYLE_NAME", "crimson");
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    const gotValue = document.documentElement.style.getPropertyValue(
      "--$STYLE_NAME",
    );
    if (gotValue === "crimson") {
      el.innerHTML = "ok";
    }
  }
};
