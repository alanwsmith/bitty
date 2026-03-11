async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-svg.svg";
  const fallback = null;
  const options = {
    headers: {
      "x-bitty-test": "data_$SIGNAL_NAME",
    },
  };
  const result = await this.fetchSVG("svg_$SIGNAL_NAME", url, fallback, options);
  if (result.ok === true) {
    el.innerHTML = "test passed";
  }
}
