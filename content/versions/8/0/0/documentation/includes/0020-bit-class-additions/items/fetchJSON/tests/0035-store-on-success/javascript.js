#key = "json_signal_DC60C";

signal_DC60C(_, el) {
  this.loadJSON(this.#key);
  el.innerHTML = this.json[this.#key].status;
}


async bittyReady() {
  const url = "/[@ file.parent @]/payloads/valid-json.json";
  await this.fetchJSON(this.#key, url);
  delete this.json[this.#key];
  this.trigger("signal_DC60C");
}