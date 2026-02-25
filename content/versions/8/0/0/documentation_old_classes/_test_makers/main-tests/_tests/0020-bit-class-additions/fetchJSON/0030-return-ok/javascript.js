async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-json.json";
  const result = await this.fetchJSON("data_$SIGNAL_NAME", url);
  if (result.ok === true) {
    el.innerHTML = "test passed";
  }
}