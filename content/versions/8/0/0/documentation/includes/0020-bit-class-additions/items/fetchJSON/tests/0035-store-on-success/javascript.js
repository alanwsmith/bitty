#key = "json_signal_DC60C";

signal_DC60C(_, el) {
  this.loadJSON("el_DC60C");
  el.innerHTML = this.json["el_DC60C"].status;
}


async bittyReady() {
  const url = "/[@ file.parent @]/payloads/valid-json.json";
  await this.fetchJSON("el_DC60C", url);
  delete this.json["el_DC60C"];
  this.trigger("signal_DC60C");
}