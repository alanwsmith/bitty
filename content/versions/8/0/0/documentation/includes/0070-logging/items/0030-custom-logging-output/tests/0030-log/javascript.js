window.ClassBEDEA = class {
  signal_BEDEA() {
    this.api.setOutputLogFunction("log", (log) => {
      console.log(`CUSTOM LOG FUNCTION: ${log.payload}`);
    });
    this.api.log("custom log output example-BEDEA");
  }
};
