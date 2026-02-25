signal_6CF16(_, el) {
  this.createElement("el_6CF16", `<div class="test">test passed</div>`);
  delete this._element["el_6CF16"];
  this.loadElement("el_6CF16");
  el.replaceWith(this.renderElement("el_6CF16"));
}

