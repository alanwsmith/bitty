$SIGNAL_NAME(_, el) {
  const newElement = document.createElement("div");
  newElement.innerHTML = "test passed";
  this.loadFragment("el_$HASH", newElement);
  el.innerHTML = this.renderFragment("el_$HASH").children[0].innerHTML;
}