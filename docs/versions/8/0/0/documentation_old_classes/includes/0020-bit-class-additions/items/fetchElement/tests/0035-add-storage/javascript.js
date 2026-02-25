async signal_63556(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-element.xml";
  await this.fetchElement("el_63556", url);
  delete this._element["el_63556"];
  this.loadElement("el_63556");
  el.replaceWith(this.renderElement("el_63556"));
}

