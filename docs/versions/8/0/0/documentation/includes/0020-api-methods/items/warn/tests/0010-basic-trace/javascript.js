window.ClassAC409 = class {
  bittyReady() {
    this.api.trigger("automatic_test_signal_AC409");
  }

  automatic_test_signal_AC409(_, el) {
    this.api.setOutputLogLevel("none");
    this.api.warn("example-AC409");
    const got = this.api.logs()[0].payload;
    if (got === "example-AC409") {
      el.innerHTML = "ok";
    }
  }

  manual_review_signal_AC409(_, __) {
    this.api.setOutputLogLevel("warn");
    this.api.warn("Example log - example-AC409");
  }
};
