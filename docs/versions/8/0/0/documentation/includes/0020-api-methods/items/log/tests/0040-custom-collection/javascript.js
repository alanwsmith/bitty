window.Class261FE = class {
  bittyReady() {
    // Disable output to avoid testing noise then
    // fire trigger for automatic test.
    this.api.setOutputLogLevel("none");
    this.api.trigger("automatic_test_signal_261FE");
  }

  automatic_test_signal_261FE(_, el) {
    this.api.setCollectionLogFunction("log", (payload) => {
      return {
        custom_key: "custom_value_261FE",
        payload: payload,
      };
    });
    this.api.log({ object_example: "test_value_261FE" });
    if (this.api.logs()[0].custom_key === "custom_value_261FE") {
      el.innerHTML = "ok";
    }
  }

  // Provide method to re-enable console logging
  // output and displaying messages when the
  // example button is activated manually.

  signal_261FE(_, __) {
    this.api.setOutputLogLevel("log");
    this.api.log("text based log from custome example 261FE");
    this.api.log(
      { exampleLogObject: "261FE", message: "alfa bravo charle" },
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
