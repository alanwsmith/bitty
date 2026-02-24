#key = "element_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  this.updateElement(this.#key, `<div class="test">ok</div>`);
  el.replaceWith(this.renderElement(this.#key));
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement(this.#key, `<div class="test">bug</div>`);
  this.trigger("$SIGNAL_NAME");
}