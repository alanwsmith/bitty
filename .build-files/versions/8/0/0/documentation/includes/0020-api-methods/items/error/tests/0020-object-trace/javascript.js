window.ClassF6508 = class {
  bittyReady() {
    this.api.trigger("automatic_test_signal_F6508");
  }

  automatic_test_signal_F6508(_, el) {
    this.api.setOutputLogLevel("none");
    this.api.error({ example: "example-F6508" });
    const got = this.api.logs()[0].payload.example;
    if (got === "example-F6508") {
      el.innerHTML = "ok";
    }
  }

  manual_review_signal_F6508(_, __) {
    this.api.setOutputLogLevel("error");
    this.api.error({ example: "example-F6508" });
  }
};
