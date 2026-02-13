window.$CLASS_NAME = class {
  bittyReady() {
    this.api.setOutputLogLevel("trace"); // set for test
  }

  $SIGNAL_NAME() {
    this.api.setCollectionLogFunction("error", (payload) => {
      return { custom_collector: payload };
    });
    this.api.trace("custom trace payload $EXAMPLE_NAME");
  }
};
