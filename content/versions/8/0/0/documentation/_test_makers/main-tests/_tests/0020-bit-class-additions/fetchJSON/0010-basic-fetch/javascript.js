async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-json.json";
  await this.fetchJSON("el_$HASH", url);
  el.innerHTML = this.json["el_$HASH"].status;
}
