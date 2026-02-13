window.Class13EEA = class {
  bittyReady() {
    // Disable output to avoid testing noise then
    // fire trigger for automatic test.
    this.api.setOutputLogLevel("none");
    this.api.trigger("automatic_test_signal_13EEA");
  }

  automatic_test_signal_13EEA(_, el) {
    this.api.setCollectionLogFunction("trace", (payload) => {
      return {
        custom_key: "custom_value_13EEA",
        payload: payload,
      };
    });
    this.api.trace({ object_example: "test_value_13EEA" });
    if (this.api.logs()[0].custom_key === "custom_value_13EEA") {
      el.innerHTML = "ok";
    }
  }

  // Provide method to re-enable console logging
  // output and displaying messages when the
  // example button is activated manually.

  signal_13EEA(_, __) {
    this.api.setOutputLogLevel("trace");
    this.api.trace("text based log from custome example 13EEA");
    this.api.trace(
      { exampleLogObject: "13EEA", message: "alfa bravo charle" },
    );
  }

  // NOTE: The default log output function expects
  // the content of the log message to be in a
  // `.payload` property on the object passed to
  // it by the collection function. It will output
  // `undefined` to the console if it's not
  // available. If the signature of the object you
  // create with a custom collector function doesn't
  // contain `.payload` you'll likely want to use
  // `this.api.setOutputLogFunction()` to accommodate
  // your object.
};
