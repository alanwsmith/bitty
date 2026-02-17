window.$CLASS_NAME = class {
  $SIGNAL_NAME() {
    this.api.setOutputLogLevel("debug");
    this.api.setOutputLogFunction("debug", (log) => {
      console.log(`$${new Date()} - Custom Log Output - see below`);
      console.log({
        log_type: "some_name",
        message: log,
        whatever: ["alfa", "bravo", "charlie"],
      });
    });
    this.api.debug("custom debug output $EXAMPLE_NAME");
  }
};
