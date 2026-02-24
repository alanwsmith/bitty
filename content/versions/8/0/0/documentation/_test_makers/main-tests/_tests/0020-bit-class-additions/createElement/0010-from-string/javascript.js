$SIGNAL_NAME(_, el) {
  const elementString = `<div class="test">test passedx</div>`;
  this.createElement("el_$HASH", elementString);
  el.replaceWith(this.renderElement("el_$HASH"));
}


