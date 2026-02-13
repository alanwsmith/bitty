window.Class259B2 = class {
  signal_259B2() {
    this.api.setOutputLogFunction("warn", (log) => {
      console.log(`CUSTOM LOG FUNCTION: ${log.payload}`);
    });
    this.api.warn("custom warn output example-259B2");
  }
};
