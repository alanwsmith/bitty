window.Class3AD56 = class {
  bittyReady() {
    // set output level for test
    this.api.setOutputLogLevel("debug");
  }

  signal_3AD56() {
    this.api.setOutputLogFunction("debug", (log) => {
      console.log(`CUSTOM LOG FUNCTION: ${log.payload}`);
    });
    this.api.debug("custom debug output example-3AD56");
  }
};
