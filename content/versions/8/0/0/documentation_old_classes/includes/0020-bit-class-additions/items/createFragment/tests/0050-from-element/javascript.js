signal_69369(_, el) {
  const element = document.createElement("div");
  element.innerHTML = "test passed";
  this.createFragment("el_69369", element);
  el.innerHTML = this.renderFragment("el_69369").firstChild.innerHTML;
}
