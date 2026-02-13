window.$CLASS_NAME = class {
  bittyReady() {
    // set output level for test
    this.api.setOutputLogLevel("debug");
  }

  $SIGNAL_NAME() {
    this.api.setOutputLogFunction("debug", (log) => {
      console.log(`CUSTOM LOG FUNCTION: $${log.payload}`);
    });
    this.api.debug("custom debug output $EXAMPLE_NAME");
  }
};
