async signal_78263(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-json.json";
  const result = await this.fetchJSON("el_78263", url);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  }
}
