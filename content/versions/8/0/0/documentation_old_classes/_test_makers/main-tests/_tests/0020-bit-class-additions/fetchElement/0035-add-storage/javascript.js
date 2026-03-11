async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-element.xml";
  await this.fetchElement("el_$HASH", url);
  delete this._element["el_$HASH"];
  this.loadElement("el_$HASH");
  el.replaceWith(this.renderElement("el_$HASH"));
}

