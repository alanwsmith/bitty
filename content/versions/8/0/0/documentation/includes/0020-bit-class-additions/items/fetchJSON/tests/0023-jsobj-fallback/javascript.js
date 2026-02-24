#key = "json_signal_BE359";

async signal_BE359(_, el) {
  const url = "/[@ file.parent @]/payloads/invalid-json.xjson";
  const fallback = { status: "test passed" };
  const result = await this.fetchJSON("el_BE359", url, fallback);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("signal_BE359");
}