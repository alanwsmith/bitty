window.$CLASS_NAME = class {
  $SIGNAL_NAME() {
    this.api.setOutputLogLevel("trace");
    this.api.trace("trace: $EXAMPLE_NAME");
  }
};
