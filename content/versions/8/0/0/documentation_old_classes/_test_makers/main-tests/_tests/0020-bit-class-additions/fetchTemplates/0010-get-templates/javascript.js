async $SIGNAL_NAME(input, el) {
  const url = "/[@ file.parent @]/payloads/valid-templates/";
  await this.loadTemplates(url);
  el.replaceWith(this.renderElement("elementTemplate"));
  this.trigger("view_$SIGNAL_NAME");
}

view_$SIGNAL_NAME(_, el) {
  el.replaceWith(this.renderSVG("svgTemplate"));
}
