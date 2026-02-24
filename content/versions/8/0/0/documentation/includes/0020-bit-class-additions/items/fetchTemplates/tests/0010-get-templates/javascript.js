#key = "key_signal_A1A2F";

async signal_A1A2F(input, el) {
  const url = "/[@ file.parent @]/payloads/valid-templates/";
  await this.fetchTemplates(url);
  el.replaceWith(this.renderElement("elementTemplate"));
  this.trigger("view_signal_A1A2F");
}

view_signal_A1A2F(_, el) {
  // el.replaceWith(this.renderSVG("svgTemplate"));
}


bittyReady() {
  this.trigger("signal_A1A2F");
}
