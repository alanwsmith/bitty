#key = "json_$SIGNAL_NAME";

async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-json.json";
  const result = await this.fetchJSON(this.#key, url);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createJSON(this.#key, {});
  this.trigger("$SIGNAL_NAME");
}