#key = "el_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  el.replaceWith(this.renderElement(this.#key));
}


bittyReady() {
  this.createElement(this.#key, `<div class="test">ok</div>`);
  this.trigger("test_$SIGNAL_NAME");
}