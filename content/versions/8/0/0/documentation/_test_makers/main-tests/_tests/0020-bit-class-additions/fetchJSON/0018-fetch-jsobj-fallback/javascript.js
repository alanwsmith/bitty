#key = "json_$SIGNAL_NAME";

async $SIGNAL_NAME(_, el) {
  const url = "/intentionally-missing-file.json";
  const fallback = { "status": "ok" };
  const result = await this.fetchJSON(this.#key, url, fallback);
  if (result.ok === true && result.level === "warn") {
//    el.innerHTML = this.json[this.#key].status;
  }
}
