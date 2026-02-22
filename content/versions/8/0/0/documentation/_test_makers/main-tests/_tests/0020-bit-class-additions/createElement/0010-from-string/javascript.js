// #key = "el_$SIGNAL_NAME";

bittyReady() {
  this.trigger("test_$SIGNAL_NAME");
}

test_$SIGNAL_NAME(_, el) {
  const elementString = `<div class="test">ok</div>`;
  this.createElement("el_$SIGNAL_NAME", elementString);
  el.replaceWith(this.renderElement("el_$SIGNAL_NAME"));
}


