#key = "json_$SIGNAL_NAME";

async test_$SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-json.json";
  await this.fetchJSON(this.#key, url);
  el.innerHTML = this.json[this.#key].status;
}


bittyReady() {
  this.trigger("test_$SIGNAL_NAME");
}