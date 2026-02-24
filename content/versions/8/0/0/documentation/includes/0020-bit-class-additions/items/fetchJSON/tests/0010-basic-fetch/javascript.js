#key = "json_signal_125F4";

async signal_125F4(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-json.json";
  await this.fetchJSON(this.#key, url);
//  el.innerHTML = this.json[this.#key].status;
}


bittyReady() {
  this.trigger("signal_125F4");
}
