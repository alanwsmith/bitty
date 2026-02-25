

$SIGNAL_NAME(element, el) {
  const result = this.loadFragment("el_$HASH");
  el.innerHTML = this.renderFragment("el_$HASH").firstChild.innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.deleteFragment("el_$HASH");
  this.updateFragment("el_$HASH", `<div>ok</div>`);
  delete this._fragment["el_$HASH"];
  this.trigger("$SIGNAL_NAME");
}