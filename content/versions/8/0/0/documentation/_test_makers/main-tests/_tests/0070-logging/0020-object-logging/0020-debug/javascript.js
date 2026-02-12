window.$CLASS_NAME = class {
  $SIGNAL_NAME() {
    this.api.setLogLevel("debug");
    this.api.debug({ trace: "$EXAMPLE_NAME" });
  }
};
