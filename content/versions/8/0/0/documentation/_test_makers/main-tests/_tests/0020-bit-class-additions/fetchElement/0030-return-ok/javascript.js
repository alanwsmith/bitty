#key = "el_$SIGNAL_NAME";

async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-element.xml";
  const result = await this.fetchElement("el_$HASH", url);
  if (result.ok === true) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}