async $SIGNAL_NAME(_, el) {  
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  await this.fetchFragment("el_$HASH", url);
  delete this._fragment["el_$HASH"];
  this.loadFragment("el_$HASH");
  el.innerHTML = this.renderFragment("el_$HASH").children[1].innerHTML;
}
