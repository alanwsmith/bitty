window.$CLASS_NAME = class {
  bittyReady() {
    this.api.setLogLevel("trace");
    this.api.trace({ trace: "$EXAMPLE_NAME" });
  }
};
