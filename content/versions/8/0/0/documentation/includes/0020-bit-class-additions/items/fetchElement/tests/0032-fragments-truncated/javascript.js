

async signal_E0510(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  const result = await this.fetchElement("el_E0510", url);
  if (
    result.level === "warn"
  ) {
    el.replaceWith(this.renderElement("el_E0510"));
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("signal_E0510");
}