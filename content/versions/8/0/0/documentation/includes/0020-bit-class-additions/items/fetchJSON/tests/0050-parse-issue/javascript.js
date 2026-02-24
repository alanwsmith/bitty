async signal_4734F(_, el) {
  const url = "/[@ file.parent @]/payloads/invalid-json.xjson";
  const result = await this.fetchJSON("el_4734F", url);
  if (result.ok === false) {
    el.innerHTML = "test passed";
  }
}