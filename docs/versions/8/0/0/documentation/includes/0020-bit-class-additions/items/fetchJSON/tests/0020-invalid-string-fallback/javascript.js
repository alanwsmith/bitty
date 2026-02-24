async signal_09ED7(_, el) {
  const url = "/[@ file.parent @]/payloads/invalid-json.xjson";
  const fallback = `{ "status": "test passed" }`;
  const result = await this.fetchJSON("el_09ED7", url, fallback);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = this.json["el_09ED7"].status;
  }
}
