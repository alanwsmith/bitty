window.$CLASS_NAME = class {
  $SIGNAL_NAME() {
    this.api.setOutputLogLevel("debug");
    this.api.debug({ trace: "$EXAMPLE_NAME" });
  }
};
