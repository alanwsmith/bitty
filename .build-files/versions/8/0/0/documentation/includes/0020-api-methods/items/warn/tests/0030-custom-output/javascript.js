window.ClassDC1DE = class {
  signal_DC1DE() {
    this.api.setOutputLogLevel("warn");
    this.api.setOutputLogFunction("warn", (log) => {
      console.log(`${new Date()} - Custom Log Output - see below`);
      console.log({
        log_type: "some_name",
        message: log,
        whatever: ["alfa", "bravo", "charlie"],
      });
    });
    this.api.warn("custom warn output example-DC1DE");
  }
};
