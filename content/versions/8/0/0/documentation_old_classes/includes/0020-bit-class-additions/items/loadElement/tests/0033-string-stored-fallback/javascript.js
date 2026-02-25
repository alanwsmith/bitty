signal_9D350(_, el) {
  this.setLocalLogLevel("none");
  this.deleteElement("el_9D350");
  this.loadElement("el_9D350", `<div class="test">test passed</div>`);
  delete this._element["el_9D350"];
  this.loadElement("el_9D350");
  el.replaceWith(this.renderElement("el_9D350"));
}
