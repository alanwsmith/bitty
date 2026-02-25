async signal_49058(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-element.xml";
  await this.fetchElement("el_49058", url);
  el.replaceWith(this.renderElement("el_49058"));
}
