window.ClassBE22A = class {
  bittyReady() {
    this.api.trigger("automatic_test_signal_BE22A");
  }

  automatic_test_signal_BE22A(_, el) {
    this.api.setOutputLogLevel("none");
    this.api.debug({ example: "example-BE22A" });
    const got = this.api.logs()[0].payload.example;
    if (got === "example-BE22A") {
      el.innerHTML = "ok";
    }
  }

  manual_review_signal_BE22A(_, __) {
    this.api.setOutputLogLevel("debug");
    this.api.debug({ example: "example-BE22A" });
  }
};
