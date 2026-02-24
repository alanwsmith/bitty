

signal_FC310(_, el) {
  const fragment = this.renderFragment("el_FC310");
//  el.innerHTML = fragment.children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_signal_FC310");
}

given_signal_FC310(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment("el_FC310", `<div></div><div>ok</div>`);
  this.trigger("signal_FC310");
}
