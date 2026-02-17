window.Class14556 = class {
  bittyReady() {
    this.api.trigger("automatic_test_signal_14556");
  }

  automatic_test_signal_14556(_, el) {
    this.api.setOutputLogLevel("none");
    this.api.trace("example-14556");
    const got = this.api.logs()[0].payload;
    if (got === "example-14556") {
      el.innerHTML = "ok";
    }
el.innerHTML = "TODO: Move to using bit class directly"
  }

  manual_review_signal_14556(_, __) {
    this.api.setOutputLogLevel("trace");
    this.api.trace("Example log - example-14556");
  }
};
