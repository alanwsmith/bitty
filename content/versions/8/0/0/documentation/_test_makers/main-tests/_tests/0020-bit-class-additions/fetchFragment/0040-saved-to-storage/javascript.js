

$SIGNAL_NAME(_, el) {
  this.loadFragment("el_$HASH");
  el.innerHTML = this.renderFragment("el_$HASH").children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

async given_$SIGNAL_NAME(_, __) {
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  await this.fetchFragment("el_$HASH", url);
  delete this._fragment["el_$HASH"];
  this.trigger("$SIGNAL_NAME");
}