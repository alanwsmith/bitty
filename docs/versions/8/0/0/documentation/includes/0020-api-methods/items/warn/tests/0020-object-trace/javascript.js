window.ClassA6709 = class {
  bittyReady() {
    this.api.trigger("automatic_test_signal_A6709");
  }

  automatic_test_signal_A6709(_, el) {
    this.api.setOutputLogLevel("none");
    this.api.warn({ example: "example-A6709" });
    const got = this.api.logs()[0].payload.example;
    if (got === "example-A6709") {
      el.innerHTML = "ok";
    }
  }

  manual_review_signal_A6709(_, __) {
    this.api.setOutputLogLevel("warn");
    this.api.warn({ example: "example-A6709" });
  }
};
