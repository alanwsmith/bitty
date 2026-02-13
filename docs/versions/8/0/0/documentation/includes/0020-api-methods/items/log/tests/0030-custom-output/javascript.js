window.Class4954B = class {
  signal_4954B() {
    this.api.setOutputLogLevel("log");
    this.api.setOutputLogFunction("log", (log) => {
      console.log(`${new Date()} - Custom Log Output - see below`);
      console.log({
        log_type: "some_name",
        message: log,
        whatever: ["alfa", "bravo", "charlie"],
      });
    });
    this.api.log("custom log output example-4954B");
  }
};
