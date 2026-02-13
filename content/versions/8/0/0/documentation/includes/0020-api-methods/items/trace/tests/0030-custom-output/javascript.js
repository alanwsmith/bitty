window.Class9FCB5 = class {
  bittyReady() {
    // set output level for test
    this.api.setOutputLogLevel("trace");
  }

  signal_9FCB5() {
    this.api.setOutputLogFunction("trace", (log) => {
      console.log(`CUSTOM LOG FUNCTION: ${log.payload}`);
    });
    this.api.trace("custom trace output example-9FCB5");
  }
};
