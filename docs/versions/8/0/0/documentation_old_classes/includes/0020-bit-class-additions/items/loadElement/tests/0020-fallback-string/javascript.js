signal_B86EE(_, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  this.deleteElement("el_B86EE");
  this.loadElement("el_B86EE", `<div class="test">test passed</div>`);
  el.replaceWith(this.renderElement("el_B86EE"));
}

