window.Class5B170 = class {
  bittyReady() {
    this.api.setOutputLogLevel("trace"); // set for test
  }

  signal_5B170() {
    this.api.setCollectionLogFunction("error", (payload) => {
      return { custom_collector: payload };
    });
    this.api.trace("custom trace payload example-5B170");
  }
};
