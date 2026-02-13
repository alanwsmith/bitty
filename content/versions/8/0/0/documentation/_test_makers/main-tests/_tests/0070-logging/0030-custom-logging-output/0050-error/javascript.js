window.$CLASS_NAME = class {
  $SIGNAL_NAME() {
    this.api.setOutputLogFunction("error", (log) => {
      console.log(`CUSTOM LOG FUNCTION: $${log.payload}`);
    });
    this.api.error("custom error output $EXAMPLE_NAME");
  }
};
