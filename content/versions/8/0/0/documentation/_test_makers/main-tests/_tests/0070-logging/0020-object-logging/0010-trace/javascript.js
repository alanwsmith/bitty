window.$CLASS_NAME = class {
  $SIGNAL_NAME() {
    this.api.setLogLevel("trace");
    this.api.trace({ trace: "$EXAMPLE_NAME" });
  }
};
