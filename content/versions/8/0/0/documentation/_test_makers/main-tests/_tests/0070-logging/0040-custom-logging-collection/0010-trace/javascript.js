window.$CLASS_NAME = class {
  bittyReady() {
    // set level for test.
    this.api.setOutputLogLevel("trace");
  }

  $SIGNAL_NAME() {
    // set the collection function.
    this.api.setCollectionLogFunction("trace", (payload) => {
      return { custom_setup: `CUSTOM--$${payload}--CUSTOM` };
    });

    // Also adjust output to handle output from the
    // custom collection function.
    this.api.setOutputLogFunction("trace", (log) => {
      console.log(`got this: $${log.custom_setup}`);
    });

    this.api.trace("custom trace payload $EXAMPLE_NAME");
  }
};
