#key = "json_$SIGNAL_NAME";

async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/invalid-json.xjson";
  const result = await this.fetchJSON(this.#key, url);
  if (result.ok === false) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("$SIGNAL_NAME");
}