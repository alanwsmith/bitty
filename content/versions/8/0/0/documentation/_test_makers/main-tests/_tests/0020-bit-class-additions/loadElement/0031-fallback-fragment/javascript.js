window.$CLASS_NAME = class {
  #key = "el_$SIGNAL_NAME";

  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.setLogLevel("none");
    this.removeElement(this.#key);
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const newFragment = document.createDocumentFragment();
    const newEl = document.createElement("div");
    newEl.innerHTML = "ok";
    newFragment.appendChild(newEl);
    const result = this.loadElement(this.#key, newFragment);
    console.log(result);
    if (result.level === "warn" && result.ok === true) {
      el.innerHTML = this.element[this.#key].innerHTML;
    }
  }
};
