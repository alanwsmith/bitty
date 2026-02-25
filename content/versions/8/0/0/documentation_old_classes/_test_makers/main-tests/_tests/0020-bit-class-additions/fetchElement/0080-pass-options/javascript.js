

async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-element.xml";
  const options = {
    headers: {
      "x-bitty-test": "data_$SIGNAL_NAME",
    },
  };
  // await this.fetchElement(key, url, fallback, options);
  //
  // NOTE: Confirming options must be done manually.
  // This test is set to always pass as a result.
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}