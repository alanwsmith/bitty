window.Class779E9 = class {
  bittyReady() {
    this.api.trigger("automatic_test_signal_779E9");
  }

  automatic_test_signal_779E9(_, el) {
    this.api.setOutputLogLevel("none");
    this.api.log("example-779E9");
    const got = this.api.logs()[0].payload;
    if (got === "example-779E9") {
      el.innerHTML = "ok";
    }
  }

  manual_review_signal_779E9(_, __) {
    this.api.setOutputLogLevel("log");
    this.api.log("Example log - example-779E9");
  }
};
