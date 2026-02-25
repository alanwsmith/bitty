

$SIGNAL_NAME(element, el) {
  this.updateFragment("el_$HASH", element);
  el.innerHTML = this.renderFragment("el_$HASH").firstChild.innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  const element = document.createElement("div");
  element.innerHTML = "test passed";
  this.send(element, "$SIGNAL_NAME");
}