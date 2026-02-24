$SIGNAL_NAME(_, el) {
  this.deleteFragment("el_$HASH");
  const fallbackFragment = document.createDocumentFragment();
  const fallbackElement1 = document.createElement("div");
  const fallbackElement2 = document.createElement("div");
  fallbackElement2.innerHTML = "test passed";
  fallbackFragment.appendChild(fallbackElement1);
  fallbackFragment.appendChild(fallbackElement2);
  this.loadFragment("el_$HASH", fallbackFragment);
  el.innerHTML = this.renderFragment("el_$HASH").children[1].innerHTML;
}
