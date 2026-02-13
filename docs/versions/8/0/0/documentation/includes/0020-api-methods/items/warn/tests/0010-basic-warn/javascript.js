window.Class6691B = class {
  bittyReady() {
    // turn off output to the console
    // then trigger the test signal
    this.api.setOutputLogLevel("none");
    this.api.trigger("signal_6691B");
  }

  signal_6691B(_, el) {
    this.api.warn("example-6691B");
    const got = this.api.logs()[0].payload;
    if (got === "example-6691B") {
      el.innerHTML = "ok";
    }
  }
};
