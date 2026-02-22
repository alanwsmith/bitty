#key = "el_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const elementString = `<div class="test">ok</div>`;
  this.createElement(this.#key, elementString);
  el.replaceWith(this.renderElement(this.#key));
}


bittyReady() {
  this.trigger("test_$SIGNAL_NAME");
}