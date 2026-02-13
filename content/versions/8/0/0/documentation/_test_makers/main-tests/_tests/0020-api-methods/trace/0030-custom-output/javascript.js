window.$CLASS_NAME = class {
  $SIGNAL_NAME() {
    this.api.setOutputLogLevel("trace");
    this.api.setOutputLogFunction("trace", (log) => {
      console.log(`CUSTOM LOG FUNCTION: $${log.payload}`);
    });
    this.api.trace("custom trace output $EXAMPLE_NAME");
  }
};
