#key = "json_signal_125F4";

async signal_125F4(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-json.json";
  await this.fetchJSON("el_125F4", url);
//  el.innerHTML = this.json["el_125F4"].status;
}


bittyReady() {
  this.trigger("signal_125F4");
}
