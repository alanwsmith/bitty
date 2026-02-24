#key = "fragment_$SIGNAL_NAME";

$SIGNAL_NAME(element, el) {
  this.updateFragment(this.#key, element);
  el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  const element = document.createElement("div");
  element.innerHTML = "ok";
  this.send(element, "$SIGNAL_NAME");
}