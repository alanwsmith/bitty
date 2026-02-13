window.ClassE7B7D = class {
  bittyReady() {
    this.api.trigger("automatic_test_signal_E7B7D");
  }

  automatic_test_signal_E7B7D(_, el) {
    this.api.setOutputLogLevel("none");
    this.api.log({ example: "example-E7B7D" });
    const got = this.api.logs()[0].payload.example;
    if (got === "example-E7B7D") {
      el.innerHTML = "ok";
    }
  }

  manual_review_signal_E7B7D(_, __) {
    this.api.setOutputLogLevel("log");
    this.api.log({ example: "example-E7B7D" });
  }
};
