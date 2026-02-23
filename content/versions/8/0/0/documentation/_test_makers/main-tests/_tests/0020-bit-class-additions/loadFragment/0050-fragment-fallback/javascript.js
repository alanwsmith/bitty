#key = "fragment_$SIGNAL_NAME";

test_$SIGNAL_NAME(fallbackFragment, el) {
  this.loadFragment(this.#key, fallbackFragment);
  el.innerHTML = this.renderFragment(this.#key).children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.deleteFragment(this.#key);
  const fallbackFragment = document.createDocumentFragment();
  const fallbackElement1 = document.createElement("div");
  const fallbackElement2 = document.createElement("div");
  fallbackElement2.innerHTML = "ok";
  fallbackFragment.appendChild(fallbackElement1);
  fallbackFragment.appendChild(fallbackElement2);
  this.send(fallbackFragment, "test_$SIGNAL_NAME");
}