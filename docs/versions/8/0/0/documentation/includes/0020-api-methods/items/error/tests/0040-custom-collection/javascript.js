window.Class45D2C = class {
  bittyReady() {
    // Disable output to avoid testing noise then
    // fire trigger for automatic test.
    this.api.setOutputLogLevel("none");
    this.api.trigger("automatic_test_signal_45D2C");
  }

  automatic_test_signal_45D2C(_, el) {
    this.api.setCollectionLogFunction("error", (payload) => {
      return {
        custom_key: "custom_value_45D2C",
        payload: payload,
      };
    });
    this.api.error({ object_example: "test_value_45D2C" });
    if (this.api.logs()[0].custom_key === "custom_value_45D2C") {
      el.innerHTML = "ok";
    }
  }

  // Provide method to re-enable console logging
  // output and displaying messages when the
  // example button is activated manually.

  signal_45D2C(_, __) {
    this.api.setOutputLogLevel("error");
    this.api.error("text based log from custome example 45D2C");
    this.api.error(
      { exampleLogObject: "45D2C", message: "alfa bravo charle" },
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
