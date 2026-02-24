#key = "el_$SIGNAL_NAME";

async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-element.xml";
  await this.fetchElement("el_$HASH", url);
  el.replaceWith(this.renderElement("el_$HASH"));
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}