window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("automatic_test_$SIGNAL_NAME");
  }

  automatic_test_$SIGNAL_NAME(_, el) {
    this.api.setOutputLogLevel("none");
    this.api.trace("$EXAMPLE_NAME");
    const got = this.api.logs()[0].payload;
    if (got === "$EXAMPLE_NAME") {
      el.innerHTML = "ok";
    }
  }

  manual_review_$SIGNAL_NAME(_, __) {
    this.api.setOutputLogLevel("trace");
    this.api.trace("Example log - $EXAMPLE_NAME");
  }
};
