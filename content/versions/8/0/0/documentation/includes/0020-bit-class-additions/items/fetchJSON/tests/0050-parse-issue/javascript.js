#key = "json_signal_4734F";

async test_signal_4734F(_, el) {
  const url = "/[@ file.parent @]/payloads/invalid-json.xjson";
  const result = await this.fetchJSON(this.#key, url);
  if (result.ok === false) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("test_signal_4734F");
}