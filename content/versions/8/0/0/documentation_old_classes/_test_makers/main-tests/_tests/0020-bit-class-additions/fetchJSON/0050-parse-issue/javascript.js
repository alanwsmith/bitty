async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/invalid-json.xjson";
  const result = await this.fetchJSON("el_$HASH", url);
  if (result.ok === false) {
    el.innerHTML = "test passed";
  }
}