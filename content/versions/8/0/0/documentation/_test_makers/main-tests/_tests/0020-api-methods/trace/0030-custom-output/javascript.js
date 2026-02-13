window.$CLASS_NAME = class {
  $SIGNAL_NAME() {
    this.api.setOutputLogLevel("trace");
    this.api.setOutputLogFunction("trace", (log) => {
      console.log(`$${new Date()} - Custom Log Output - see below`);
      console.log({
        log_type: "some_name",
        message: log,
        whatever: ["alfa", "bravo", "charlie"],
      });
    });
    this.api.trace("custom trace output $EXAMPLE_NAME");
  }
};
