#key = "el_$SIGNAL_NAME";

async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  const result = await this.fetchElement(this.#key, url);
  if (
    result.level === "warn"
  ) {
    el.replaceWith(this.renderElement(this.#key));
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("$SIGNAL_NAME");
}