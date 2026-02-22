#key = "json_signal_5A151";

async test_signal_5A151(_, el) {
  const url = "/intentionally-missing-file.json";
  const fallback = `{ "status": "ok" }`;
  const result = await this.fetchJSON(this.#key, url, fallback);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = this.json[this.#key].status;
  }
}
