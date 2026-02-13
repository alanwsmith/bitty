window.Class524A8 = class {
  bittyReady() {
    this.api.trigger("signal_524A8");
  }

  signal_524A8(_, el) {
    this.api.setOutputLogLevel("trace");
    if (this.api.outputLogLevel() === "trace") {
      el.innerHTML = "ok";
    }
  }
};
