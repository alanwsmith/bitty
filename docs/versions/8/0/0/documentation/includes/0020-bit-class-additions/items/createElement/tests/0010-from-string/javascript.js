// #key = "el_signal_2B6BB";

bittyReady() {
  this.trigger("test_signal_2B6BB");
}

test_signal_2B6BB(_, el) {
  const elementString = `<div class="test">ok</div>`;
  this.createElement("el_signal_2B6BB", elementString);
  el.replaceWith(this.renderElement("el_signal_2B6BB"));
}


