

$SIGNAL_NAME(_, el) {
  this.loadFragment("el_$HASH", `<div></div><div>ok</div>`);
  el.innerHTML = this.renderFragment("el_$HASH").children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.deleteFragment("el_$HASH");
  this.trigger("$SIGNAL_NAME");
}