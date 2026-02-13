window.$CLASS_NAME = class {
  $SIGNAL_NAME() {
    this.api.setOutputLogFunction("warn", (log) => {
      console.log(`CUSTOM LOG FUNCTION: $${log.payload}`);
    });
    this.api.warn("custom warn output $EXAMPLE_NAME");
  }
};
