async signal_8E522(_, el) {
  const url = "/[@ file.parent @]/payloads/invalid-json.xjson";
  const fallback = `invalid json`;
  const result = await this.fetchJSON("el_8E522", url, fallback);
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}
