#key = "json_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  this.loadJSON("el_$HASH");
  el.innerHTML = this.json["el_$HASH"].status;
}


async bittyReady() {
  const url = "/[@ file.parent @]/payloads/valid-json.json";
  await this.fetchJSON("el_$HASH", url);
  delete this.json["el_$HASH"];
  this.trigger("$SIGNAL_NAME");
}