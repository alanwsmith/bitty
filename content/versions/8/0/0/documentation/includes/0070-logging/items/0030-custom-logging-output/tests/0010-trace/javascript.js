window.ClassFDF67 = class {
  bittyReady() {
    // set output level for test
    this.api.setOutputLogLevel("trace");
  }

  signal_FDF67() {
    this.api.setOutputLogFunction("trace", (log) => {
      console.log(`CUSTOM LOG FUNCTION: ${log.payload}`);
    });
    this.api.trace("custom trace output example-FDF67");
  }
};
