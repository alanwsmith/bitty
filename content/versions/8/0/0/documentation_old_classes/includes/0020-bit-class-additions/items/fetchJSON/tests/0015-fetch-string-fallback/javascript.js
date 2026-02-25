async signal_5A151(_, el) {
  const url = "/intentionally-missing-file.json";
  const fallback = `{ "status": "test passed" }`;
  const result = await this.fetchJSON("el_5A151", url, fallback);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = this.json["el_5A151"].status;
  }
}
