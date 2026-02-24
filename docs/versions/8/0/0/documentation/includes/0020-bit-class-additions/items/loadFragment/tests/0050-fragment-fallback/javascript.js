

signal_119D0(fallbackFragment, el) {
  this.loadFragment("el_119D0", fallbackFragment);
  el.innerHTML = this.renderFragment("el_119D0").children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_signal_119D0");
}

given_signal_119D0(_, __) {
  this.setLocalLogLevel("none");
  this.deleteFragment("el_119D0");
  const fallbackFragment = document.createDocumentFragment();
  const fallbackElement1 = document.createElement("div");
  const fallbackElement2 = document.createElement("div");
  fallbackElement2.innerHTML = "test passed";
  fallbackFragment.appendChild(fallbackElement1);
  fallbackFragment.appendChild(fallbackElement2);
  this.send(fallbackFragment, "signal_119D0");
}