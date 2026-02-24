

signal_E5126(fragment, el) {
  this.updateFragment("el_E5126", fragment);
  el.innerHTML = this.renderFragment("el_E5126").firstChild.innerHTML;
}


bittyReady() {
  this.trigger("given_signal_E5126");
}

given_signal_E5126(_, __) {
  const fragment = document.createDocumentFragment();
  const element = document.createElement("div");
  element.innerHTML = "test passed";
  fragment.appendChild(element);
  this.send(fragment, "signal_E5126");
}