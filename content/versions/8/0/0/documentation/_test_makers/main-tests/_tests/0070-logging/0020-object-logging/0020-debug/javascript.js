window.$CLASS_NAME = class {
  bittyReady() {
    this.api.setLogLevel("debug");
    this.api.debug({ debug: "$EXAMPLE_NAME" });
  }
};
