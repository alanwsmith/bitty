window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    this.api.setOutputLogLevel("trace");
    if (this.api.outputLogLevel() === "trace") {
      el.innerHTML = "ok";
    }
  }
};
