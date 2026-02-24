#key = "json_signal_78263";

async signal_78263(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-json.json";
  const result = await this.fetchJSON(this.#key, url);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createJSON(this.#key, {});
  this.trigger("signal_78263");
}