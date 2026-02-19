window.ClassFFDD5 = class {
  #key = "el_signal_FFDD5";

  bittyReady() {
    this.trigger("given_signal_FFDD5");
  }

  given_signal_FFDD5(_, __) {
    this.removeElement(this.#key);
    this.setLogLevel("none");
    this.addElement(this.#key, `<div>ok</div>`);
    this.trigger("test_signal_FFDD5");
  }

  test_signal_FFDD5(_, el) {
    const result = this.loadElement(this.#key);
    if (result.ok === true && result.level === "warn") {
      el.innerHTML = "ok";
    }
  }
};
