window.ClassBC740 = class {
  signal_BC740() {
    this.api.setOutputLogFunction("error", (log) => {
      console.log(`CUSTOM LOG FUNCTION: ${log.payload}`);
    });
    this.api.error("custom error output example-BC740");
  }
};
