

async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  const result = await this.fetchElement("el_$HASH", url);
  if (
    result.level === "warn"
  ) {
    el.replaceWith(this.renderElement("el_$HASH"));
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("$SIGNAL_NAME");
}