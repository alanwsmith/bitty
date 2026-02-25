

$SIGNAL_NAME(_, el) {
  this.updateFragment("el_$HASH", `<div>x</div><div>ok</div>`);
  el.innerHTML = this.renderFragment("el_$HASH").children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.trigger("$SIGNAL_NAME");
}