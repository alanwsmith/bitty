async $SIGNAL_NAME(_, el) {
  const url = "/intentionally-missing-file.json";
  const fallback = `{ "status": "test passed" }`;
  const result = await this.fetchJSON("el_$HASH", url, fallback);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = this.json["el_$HASH"].status;
  }
}
