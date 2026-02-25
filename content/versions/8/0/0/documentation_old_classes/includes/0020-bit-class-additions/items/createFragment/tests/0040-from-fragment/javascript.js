signal_A0EAB(_, el) {
  const fragment = document.createDocumentFragment();
  const element = document.createElement("div");
  element.innerHTML = "test passed";
  fragment.appendChild(element);
  this.createFragment("el_A0EAB", fragment);
  el.innerHTML = this.renderFragment("el_A0EAB").firstChild.innerHTML;
}
