window.$CLASS_NAME = class {
  $SIGNAL_NAME() {
    this.api.setOutputLogLevel("log");
    this.api.setOutputLogFunction("log", (log) => {
      console.log(`$${new Date()} - Custom Log Output - see below`);
      console.log({
        log_type: "some_name",
        message: log,
        whatever: ["alfa", "bravo", "charlie"],
      });
    });
    this.api.log("custom log output $EXAMPLE_NAME");
  }
};
