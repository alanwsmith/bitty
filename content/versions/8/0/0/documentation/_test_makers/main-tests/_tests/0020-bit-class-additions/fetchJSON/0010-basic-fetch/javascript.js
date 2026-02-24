#key = "json_$SIGNAL_NAME";

async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-json.json";
  await this.fetchJSON(this.#key, url);
//  el.innerHTML = this.json[this.#key].status;
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}
