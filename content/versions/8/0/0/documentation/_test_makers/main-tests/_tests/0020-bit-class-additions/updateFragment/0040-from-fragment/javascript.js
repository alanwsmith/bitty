

$SIGNAL_NAME(fragment, el) {
  this.updateFragment("el_$HASH", fragment);
  el.innerHTML = this.renderFragment("el_$HASH").firstChild.innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  const fragment = document.createDocumentFragment();
  const element = document.createElement("div");
  element.innerHTML = "ok";
  fragment.appendChild(element);
  this.send(fragment, "$SIGNAL_NAME");
}