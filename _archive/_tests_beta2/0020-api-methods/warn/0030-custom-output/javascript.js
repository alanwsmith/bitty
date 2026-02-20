window.$CLASS_NAME = class {
  $SIGNAL_NAME() {
    this.api.setOutputLogLevel("warn");
    this.api.setOutputLogFunction("warn", (log) => {
      console.log(`$${new Date()} - Custom Log Output - see below`);
      console.log({
        log_type: "some_name",
        message: log,
        whatever: ["alfa", "bravo", "charlie"],
      });
    });
    this.api.warn("custom warn output $EXAMPLE_NAME");
  }
};
