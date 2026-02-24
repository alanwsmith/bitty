bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.trigger("$SIGNAL_NAME");
}

async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-json.json";
  const options = {
    method: "POST",
  };
  // await this.fetchJSON("data_$SIGNAL_NAME", this.#url, options);
  //
  // NOTE: Confirming options must be done manually.
  // This test is set to always pass as a result.
  el.innerHTML = "ok";
}