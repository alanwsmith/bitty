#key = "el_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  this.loadElement(this.#key, `<div class="test">ok</div>`);
  el.replaceWith(this.renderElement(this.#key));
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteElement(this.#key);
  this.trigger("$SIGNAL_NAME");
}