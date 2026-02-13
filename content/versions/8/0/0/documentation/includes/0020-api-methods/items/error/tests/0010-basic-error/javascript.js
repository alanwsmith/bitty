window.Class1CEC4 = class {
  bittyReady() {
    // turn off output to the console
    // then trigger the test signal
    this.api.setOutputLogLevel("none");
    this.api.trigger("signal_1CEC4");
  }

  signal_1CEC4(_, el) {
    this.api.error("example-1CEC4");
    const got = this.api.logs()[0].payload;
    if (got === "example-1CEC4") {
      el.innerHTML = "ok";
    }
  }
};
