

signal_B50E1(element, el) {
  this.updateFragment("el_B50E1", element);
  el.innerHTML = this.renderFragment("el_B50E1").firstChild.innerHTML;
}


bittyReady() {
  this.trigger("given_signal_B50E1");
}

given_signal_B50E1(_, __) {
  const element = document.createElement("div");
  element.innerHTML = "ok";
  this.send(element, "signal_B50E1");
}