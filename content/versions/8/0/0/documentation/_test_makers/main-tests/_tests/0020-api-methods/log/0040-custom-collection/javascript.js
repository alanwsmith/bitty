window.$CLASS_NAME = class {
  bittyReady() {
    // Disable output to avoid testing noise then
    // fire trigger for automatic test.
    this.api.setOutputLogLevel("none");
    this.api.trigger("automatic_test_$SIGNAL_NAME");
  }

  automatic_test_$SIGNAL_NAME(_, el) {
    this.api.setCollectionLogFunction("log", (payload) => {
      return {
        custom_key: "custom_value_$HASH",
        payload: payload,
      };
    });
    this.api.log({ object_example: "test_value_$HASH" });
    if (this.api.logs()[0].custom_key === "custom_value_$HASH") {
      el.innerHTML = "ok";
    }
  }

  // Provide method to re-enable console logging
  // output and displaying messages when the
  // example button is activated manually.

  $SIGNAL_NAME(_, __) {
    this.api.setOutputLogLevel("log");
    this.api.log("text based log from custome example $HASH");
    this.api.log(
      { exampleLogObject: "$HASH", message: "alfa bravo charle" },
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
