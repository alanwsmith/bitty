window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    this.api.trace("trace: $EXAMPLE_NAME");
    console.log(this.api.logs());
  }
};
