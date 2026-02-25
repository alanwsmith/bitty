async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/invalid-json.xjson";
  const fallback = `invalid json`;
  const result = await this.fetchJSON("el_$HASH", url, fallback);
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}
