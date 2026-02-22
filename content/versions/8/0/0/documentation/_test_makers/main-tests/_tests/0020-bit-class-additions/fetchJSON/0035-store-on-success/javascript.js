#key = "json_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  this.loadJSON(this.#key);
  el.innerHTML = this.json[this.#key].status;
}


async bittyReady() {
  const url = "/[@ file.parent @]/payloads/valid-json.json";
  await this.fetchJSON(this.#key, url);
  delete this.json[this.#key];
  this.trigger("test_$SIGNAL_NAME");
}