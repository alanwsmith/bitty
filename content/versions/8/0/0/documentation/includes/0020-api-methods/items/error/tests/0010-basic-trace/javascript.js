window.ClassCA4D6 = class {
  bittyReady() {
    this.api.trigger("automatic_test_signal_CA4D6");
  }

  automatic_test_signal_CA4D6(_, el) {
    this.api.setOutputLogLevel("none");
    this.api.error("example-CA4D6");
    const got = this.api.logs()[0].payload;
    if (got === "example-CA4D6") {
      el.innerHTML = "ok";
    }
el.innerHTML = "TODO moving to using bit class directly";
  }

  manual_review_signal_CA4D6(_, __) {
    this.api.setOutputLogLevel("error");
    this.api.error("Example log - example-CA4D6");
  }
};
