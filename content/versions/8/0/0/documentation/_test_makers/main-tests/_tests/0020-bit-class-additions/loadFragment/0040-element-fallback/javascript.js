#key = "fragment_$SIGNAL_NAME";

test_$SIGNAL_NAME(newElement, el) {
  this.loadFragment(this.#key, newElement);
  el.innerHTML = this.renderFragment(this.#key).children[0].innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.deleteFragment(this.#key);
  const newElement = document.createElement("div");
  newElement.innerHTML = "ok";
  this.send(newElement, "test_$SIGNAL_NAME");
}