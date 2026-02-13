window.$CLASS_NAME = class {
  $SIGNAL_NAME() {
    this.api.setOutputLogFunction("log", (log) => {
      console.log(`CUSTOM LOG FUNCTION: $${log.payload}`);
    });
    this.api.log("custom log output $EXAMPLE_NAME");
  }
};
