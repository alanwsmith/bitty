#key = "json_signal_09ED7";

async test_signal_09ED7(_, el) {
  const url = "/[@ file.parent @]/payloads/invalid-json.xjson";
  const fallback = `{ "status": "ok" }`;
  const result = await this.fetchJSON(this.#key, url, fallback);
  if (result.ok === true && result.level === "warn") {
//    el.innerHTML = this.json[this.#key].status;
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("test_signal_09ED7");
}
