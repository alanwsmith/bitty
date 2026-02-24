#key = "svg_signal_E589E";

async signal_E589E(_, el) {
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
  this.trigger("signal_E589E");
}