window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("automatic_test_$SIGNAL_NAME");
  }

  automatic_test_$SIGNAL_NAME(_, el) {
    this.api.setOutputLogLevel("none");
    this.api.error("$EXAMPLE_NAME");
    const got = this.api.logs()[0].payload;
    if (got === "$EXAMPLE_NAME") {
      el.innerHTML = "ok";
    }
el.innerHTML = "TODO moving to using bit class directly";
  }

  manual_review_$SIGNAL_NAME(_, __) {
    this.api.setOutputLogLevel("error");
    this.api.error("Example log - $EXAMPLE_NAME");
  }
};
