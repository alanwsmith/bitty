#key = "el_signal_BC589";

signal_BC589(_, el) {
  const template = document.createElement("template");
  template.innerHTML = `<div class="test">ok</div>`;
  this.loadElement(this.#key, template.content);
  el.replaceWith(this.renderElement(this.#key));
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteElement(this.#key);
  this.trigger("signal_BC589");
}