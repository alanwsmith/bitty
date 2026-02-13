window.ClassEE2A5 = class {
  bittyReady() {
    // Disable output to avoid testing noise then
    // fire trigger for automatic test.
    this.api.setOutputLogLevel("none");
    this.api.trigger("automatic_test_signal_EE2A5");
  }

  automatic_test_signal_EE2A5(_, el) {
    this.api.setCollectionLogFunction("warn", (payload) => {
      return {
        custom_key: "custom_value_EE2A5",
        payload: payload,
      };
    });
    this.api.warn({ object_example: "test_value_EE2A5" });
    if (this.api.logs()[0].custom_key === "custom_value_EE2A5") {
      el.innerHTML = "ok";
    }
  }

  // Provide method to re-enable console logging
  // output and displaying messages when the
  // example button is activated manually.

  signal_EE2A5(_, __) {
    this.api.setOutputLogLevel("warn");
    this.api.warn("text based log from custome example EE2A5");
    this.api.warn(
      { exampleLogObject: "EE2A5", message: "alfa bravo charle" },
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
