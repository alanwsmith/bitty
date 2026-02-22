#key = "el_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const template = document.createElement("template");
  template.innerHTML = `<div class="test">ok</div>`;
  this.createElement(this.#key, template.content);
  el.replaceWith(this.renderElement(this.#key));
}


bittyReady() {
  this.trigger("test_$SIGNAL_NAME");
}