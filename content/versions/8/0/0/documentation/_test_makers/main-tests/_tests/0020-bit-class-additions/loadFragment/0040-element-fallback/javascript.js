

$SIGNAL_NAME(newElement, el) {
  this.loadFragment("el_$HASH", newElement);
  el.innerHTML = this.renderFragment("el_$HASH").children[0].innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.deleteFragment("el_$HASH");
  const newElement = document.createElement("div");
  newElement.innerHTML = "ok";
  this.send(newElement, "$SIGNAL_NAME");
}