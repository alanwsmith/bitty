window.Class04C3D = class {
  bittyReady() {
    this.api.trigger("signal_04C3D");
  }

  signal_04C3D(_, el) {
    this.api.setOutputLogLevel("trace");
    if (this.api.outputLogLevel() === "trace") {
      el.innerHTML = "ok";
    }
el.innerHTML = "TODO: Move to using bit class directly"
  }
};
