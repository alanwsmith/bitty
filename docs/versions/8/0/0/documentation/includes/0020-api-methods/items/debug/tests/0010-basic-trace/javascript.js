window.ClassE3057 = class {
  bittyReady() {
    this.api.trigger("automatic_test_signal_E3057");
  }

  automatic_test_signal_E3057(_, el) {
    this.api.setOutputLogLevel("none");
    this.api.debug("example-E3057");
    const got = this.api.logs()[0].payload;
    if (got === "example-E3057") {
      el.innerHTML = "ok";
    }
    el.innerHTML = "todo verify using bit class directly"
  }

  manual_review_signal_E3057(_, __) {
    this.api.setOutputLogLevel("debug");
    this.api.debug("Example log - example-E3057");
  }
};
