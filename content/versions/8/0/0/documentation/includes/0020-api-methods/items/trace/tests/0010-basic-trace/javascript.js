window.Class14556 = class {
  bittyReady() {
    this.api.trigger("signal_14556");
  }

  signal_14556(_, el) {
    this.api.trace("trace: example-14556");
    console.log(this.api.logs());
  }
};
