async signal_D3610(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-svg.svg";
  const fallback = null;
  const options = {
    headers: {
      "x-bitty-test": "data_signal_D3610",
    },
  };
  const result = await this.fetchSVG("svg_signal_D3610", url, fallback, options);
  if (result.ok === true) {
    el.innerHTML = "test passed";
  }
}
