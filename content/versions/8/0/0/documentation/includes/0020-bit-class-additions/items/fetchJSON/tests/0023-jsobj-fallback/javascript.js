#key = "json_signal_BE359";

async test_signal_BE359(_, el) {
  const url = "/[@ file.parent @]/payloads/invalid-json.xjson";
  const fallback = { status: "ok" };
  const result = await this.fetchJSON(this.#key, url, fallback);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.trigger("test_signal_BE359");
}