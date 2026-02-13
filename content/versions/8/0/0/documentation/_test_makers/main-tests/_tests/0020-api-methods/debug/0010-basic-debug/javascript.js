window.$CLASS_NAME = class {
  bittyReady() {
    // turn off output to the console
    // then trigger the test signal
    this.api.setOutputLogLevel("none");
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    this.api.debug("$EXAMPLE_NAME");
    const got = this.api.logs()[0].payload;
    if (got === "$EXAMPLE_NAME") {
      el.innerHTML = "ok";
    }
  }
};
