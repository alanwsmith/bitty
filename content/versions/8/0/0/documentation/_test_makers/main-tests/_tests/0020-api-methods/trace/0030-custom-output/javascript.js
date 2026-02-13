window.$CLASS_NAME = class {
  bittyReady() {
    // set output level for test
    this.api.setOutputLogLevel("trace");
  }

  $SIGNAL_NAME() {
    this.api.setOutputLogFunction("trace", (log) => {
      console.log(`CUSTOM LOG FUNCTION: $${log.payload}`);
    });
    this.api.trace("custom trace output $EXAMPLE_NAME");
  }
};
