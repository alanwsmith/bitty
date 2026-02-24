#key = "json_signal_4F5DF";

async signal_4F5DF(_, el) {
  const url = "/intentionally-missing-file.json";
  const fallback = JSON.parse(`{ "status": "ok" }`);
  const result = await this.fetchJSON("el_4F5DF", url, fallback);
  if (result.ok === true && result.level === "warn") {
//    el.innerHTML = this.json["el_4F5DF"].status;
  }
}
