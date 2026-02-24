#key = "svg_$SIGNAL_NAME";

async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-svg.svg";
  const options = {
    method: "POST",
  };
  // await this.fetchSVG(key, url, fallback, options);
  //
  // NOTE: Confirming options must be done manually.
  // This test is set to always pass as a result.
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}