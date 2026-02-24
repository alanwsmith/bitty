#key = "el_signal_BC589";

signal_BC589(_, el) {
  const template = document.createElement("template");
  template.innerHTML = `<div class="test">ok</div>`;
  this.loadElement("el_BC589", template.content);
  el.replaceWith(this.renderElement("el_BC589"));
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteElement("el_BC589");
  this.trigger("signal_BC589");
}