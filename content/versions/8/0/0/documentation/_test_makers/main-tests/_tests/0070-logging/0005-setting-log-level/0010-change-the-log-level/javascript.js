window.$CLASS_NAME = class {
  $SIGNAL_NAME() {
    this.api.setOutputLogLevel("trace");
    this.api.trace("set log level to trace: $EXAMPLE_NAME");
  }
};
