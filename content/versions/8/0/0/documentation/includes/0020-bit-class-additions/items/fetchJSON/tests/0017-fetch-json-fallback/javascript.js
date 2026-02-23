#key = "json_signal_4F5DF";

async test_signal_4F5DF(_, el) {
  const url = "/intentionally-missing-file.json";
  const fallback = JSON.parse(`{ "status": "ok" }`);
  const result = await this.fetchJSON(this.#key, url, fallback);
  if (result.ok === true && result.level === "warn") {
//    el.innerHTML = this.json[this.#key].status;
  }
}
