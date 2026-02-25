async signal_C0D64(_, el) {
  const url = "/intentionally-missing-file.json";
  const fallback = { "status": "test passed" };
  const result = await this.fetchJSON("el_C0D64", url, fallback);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = this.json["el_C0D64"].status;
  }
}
