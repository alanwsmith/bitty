#key = "json_signal_A1342";

async signal_A1342(_, el) {
  const url = "/[@ file.parent @]/payloads/invalid-json.xjson";
  const fallback = JSON.parse(`{ "status": "ok" }`);
  const result = await this.fetchJSON("el_A1342", url, fallback);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("signal_A1342");
}
