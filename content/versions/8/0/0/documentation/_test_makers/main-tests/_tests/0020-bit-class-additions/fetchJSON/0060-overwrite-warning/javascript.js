#key = "json_$SIGNAL_NAME";

async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-json.json";
  const result = await this.fetchJSON("el_$HASH", url);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createJSON("el_$HASH", {});
  this.trigger("$SIGNAL_NAME");
}