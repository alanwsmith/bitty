$SIGNAL_NAME(_, el) {
  const fragment = document.createDocumentFragment();
  const element = document.createElement("div");
  element.innerHTML = "test passed";
  fragment.appendChild(element);
  this.createFragment("el_$HASH", fragment);
  el.innerHTML = this.renderFragment("el_$HASH").firstChild.innerHTML;
}
