

$SIGNAL_NAME(_, el) {
  const fragment = this.renderFragment("el_$HASH");
//  el.innerHTML = fragment.children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment("el_$HASH", `<div></div><div>ok</div>`);
  this.trigger("$SIGNAL_NAME");
}
