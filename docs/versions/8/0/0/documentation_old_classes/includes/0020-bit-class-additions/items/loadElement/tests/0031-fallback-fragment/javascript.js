signal_BC589(_, el) {
  this.setLocalLogLevel("none");
  this.deleteElement("el_BC589");
  const template = document.createElement("template");
  template.innerHTML = `<div class="test">test passed</div>`;
  this.loadElement("el_BC589", template.content);
  el.replaceWith(this.renderElement("el_BC589"));
}
