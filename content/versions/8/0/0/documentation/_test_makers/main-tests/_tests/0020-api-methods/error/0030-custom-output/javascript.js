window.$CLASS_NAME = class {
  $SIGNAL_NAME() {
    this.api.setOutputLogLevel("error");
    this.api.setOutputLogFunction("error", (log) => {
      console.log(`$${new Date()} - Custom Log Output - see below`);
      console.log({
        log_type: "some_name",
        message: log,
        whatever: ["alfa", "bravo", "charlie"],
      });
    });
    this.api.error("custom error output $EXAMPLE_NAME");
  }
};
