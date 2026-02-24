signal_5A3FB(_, el) {
  const newElement = document.createElement("div");
  newElement.innerHTML = "test passed";
  this.loadFragment("el_5A3FB", newElement);
  el.innerHTML = this.renderFragment("el_5A3FB").children[0].innerHTML;
}