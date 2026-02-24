

signal_5A3FB(newElement, el) {
  this.loadFragment("el_5A3FB", newElement);
  el.innerHTML = this.renderFragment("el_5A3FB").children[0].innerHTML;
}


bittyReady() {
  this.trigger("given_signal_5A3FB");
}

given_signal_5A3FB(_, __) {
  this.setLocalLogLevel("none");
  this.deleteFragment("el_5A3FB");
  const newElement = document.createElement("div");
  newElement.innerHTML = "ok";
  this.send(newElement, "signal_5A3FB");
}