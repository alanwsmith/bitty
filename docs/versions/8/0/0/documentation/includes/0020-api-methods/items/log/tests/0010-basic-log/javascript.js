window.Class5821C = class {
  bittyReady() {
    // turn off output to the console
    // then trigger the test signal
    this.api.setOutputLogLevel("none");
    this.api.trigger("signal_5821C");
  }

  signal_5821C(_, el) {
    this.api.log("example-5821C");
    const got = this.api.logs()[0].payload;
    if (got === "example-5821C") {
      el.innerHTML = "ok";
    }
  }
};
