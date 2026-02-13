window.Class45C38 = class {
  bittyReady() {
    this.api.trigger("automatic_test_signal_45C38");
  }

  automatic_test_signal_45C38(_, el) {
    //this.api.setOutputLogLevel("none");
    this.api.trace({ example: "example-45C38" });
    const got = this.api.logs()[0].payload.example;
    if (got === "example-45C38") {
      el.innerHTML = "ok";
    }
  }

  manual_review_signal_45C38(_, __) {
    this.api.setOutputLogLevel("trace");
    this.api.trace({ example: "example-45C38" });
  }
};
