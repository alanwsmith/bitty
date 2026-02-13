window.ClassC349F = class {
  bittyReady() {
    // turn off output to the console
    // then trigger the test signal
    this.api.setOutputLogLevel("none");
    this.api.trigger("signal_C349F");
  }

  signal_C349F(_, el) {
    this.api.debug("example-C349F");
    const got = this.api.logs()[0].payload;
    if (got === "example-C349F") {
      el.innerHTML = "ok";
    }
  }
};
