window.ClassC22E2 = class {
  #key = "el_signal_C22E2";

  bittyReady() {
    this.trigger("given_signal_C22E2");
  }

  given_signal_C22E2(_, __) {
    this.setLogLevel("none");
    this.addElement(this.#key, `<div>ok</div>`);
    this.trigger("test_signal_C22E2");
  }

  test_signal_C22E2(_, el) {
    this.removeElement(this.#key);
    const result = this.loadElement(this.#key);
    if (result.level === "error" && result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};
