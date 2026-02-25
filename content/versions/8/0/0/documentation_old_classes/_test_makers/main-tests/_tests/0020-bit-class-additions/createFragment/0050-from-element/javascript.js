$SIGNAL_NAME(_, el) {
  const element = document.createElement("div");
  element.innerHTML = "test passed";
  this.createFragment("el_$HASH", element);
  el.innerHTML = this.renderFragment("el_$HASH").firstChild.innerHTML;
}
