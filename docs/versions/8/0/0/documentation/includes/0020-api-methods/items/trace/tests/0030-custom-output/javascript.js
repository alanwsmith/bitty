window.Class9FCB5 = class {
  signal_9FCB5() {
    this.api.setOutputLogLevel("trace");
    this.api.setOutputLogFunction("trace", (log) => {
      console.log(`CUSTOM LOG FUNCTION: ${log.payload}`);
    });
    this.api.trace("custom trace output example-9FCB5");
  }
};
