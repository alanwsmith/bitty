async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-json.json";
  await this.fetchJSON("el_$HASH", url);
  delete this.json["el_$HASH"];
  this.loadJSON("el_$HASH");
  el.innerHTML = this.json["el_$HASH"].status;
}
