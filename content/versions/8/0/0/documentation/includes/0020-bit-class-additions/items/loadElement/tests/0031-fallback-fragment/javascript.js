window.ClassBC589 = class {
  #key = "el_signal_BC589";

  bittyReady() {
    this.trigger("given_signal_BC589");
  }

  given_signal_BC589(_, __) {
    this.setLogLevel("none");
    this.removeElement(this.#key);
    this.trigger("test_signal_BC589");
  }

  test_signal_BC589(_, el) {
    const newFragment = document.createDocumentFragment();
    const newEl = document.createElement("div");
    newEl.innerHTML = "ok";
    newFragment.appendChild(newEl);
    const result = this.loadElement(this.#key, newFragment);
    if (result.level === "warn" && result.ok === true) {
      el.innerHTML = this.element[this.#key].innerHTML;
    }
  }
};
