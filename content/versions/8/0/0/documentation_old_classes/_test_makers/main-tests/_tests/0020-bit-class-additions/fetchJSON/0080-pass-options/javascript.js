async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-json.json";
  const options = {
    headers: {
      "x-bitty-test": "data_$SIGNAL_NAME",
    },
  };
  await this.fetchJSON("data_$SIGNAL_NAME", url, options);
  el.innerHTML = this.json["data_$SIGNAL_NAME"].status;
}